import React, { useEffect, useState } from "react";
import {
  cardStyle,
  profileContainer,
  profileImageStyle,
  nicknameStyle,
  titleStyle,
  contentStyle,
  dateStyle,
  likeContainer,
  likeIconStyle,
  nicknameDateContainer,
  likeTextStyle,
  moreIconStyle,
  headerContainer,
} from "./PostCard.style";
import { LikeIcon } from "@assets/svgs";
import MyFeedDropdown from "@components/commons/Dropdown/MyFeedDropdown/MyFeedDropdown";
import { roleImages } from "@constants/roleImage";
import { Role } from "types/role";
import usePostFeedLike from "apis/hooks/feeds/usePostFeedLike";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";

interface PostCardProps {
  role: Role;
  nickname: string;
  createdAt: string;
  title: string;
  content: string;
  likeCount: number;
  isLiked: boolean;
  profileImage?: string;
  isMyPost?: boolean;
  feedId: number;
  writerId: number;
}

const PostCard: React.FC<PostCardProps> = ({
  role,
  nickname,
  createdAt,
  title,
  content,
  likeCount,
  isLiked,
  isMyPost = false,
  feedId,
  writerId,
}: PostCardProps) => {
  const { mutate: likeFeed } = usePostFeedLike();
  const navigate = useNavigate();
  const [isLike, setIsLike] = useState<boolean>(isLiked);
  const [likes, setLikes] = useState<number>(likeCount);
  const accessToken = localStorage.getItem("accessToken");

  const handleLike = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    if (accessToken) {
      likeFeed(feedId, {
        onSuccess: () => {
          setIsLike(!isLike);
          setLikes((prev) => (isLike ? prev - 1 : prev + 1));
        }
      })
    }
  };

  const handleEdit = () => {
    navigate(`${routes.editPost}/${feedId}`);
    window.scrollTo(0, 0);
  };
  const handleDelete = () => {
    // todo: 삭제하기 api
  };

  const handleFeedClick = (feedId: number) => {
    navigate(`${routes.feed}/${feedId}`);
    window.scrollTo(0, 0);
  };

  const handleUserClick = (writerId: number) => {
    navigate(`${routes.myPage}/${writerId}`);
  };

  const profileImage = roleImages[role];

  return (
    <div css={cardStyle} onClick={() => handleFeedClick(feedId)}>
      <div css={headerContainer}>
        <div css={profileContainer}>
          <img
            onClick={(e) => {
              e.stopPropagation();
              handleUserClick(writerId);
            }}
            css={profileImageStyle}
            src={profileImage}
            alt="profile"
          />
          <div css={nicknameDateContainer}>
            <p
              onClick={(e) => {
                e.stopPropagation();
                handleUserClick(writerId);
              }}
              css={nicknameStyle}
            >
              {nickname}
            </p>
            <p css={dateStyle}>{createdAt}</p>
          </div>
        </div>
        {isMyPost && (
          <div
            css={moreIconStyle}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <MyFeedDropdown
              topMessage="수정하기"
              bottomMessage="삭제하기"
              onTop={handleEdit}
              onBottom={handleDelete}
            />
          </div>
        )}
      </div>
      <h1 css={titleStyle}>{title}</h1>
      <p css={contentStyle}>{content}</p>
      <div css={likeContainer} >
        <LikeIcon type="button" css={likeIconStyle(isLike, accessToken !== null)} onClick={handleLike} />
        <p css={likeTextStyle}>{likes}</p>
      </div>
    </div>
  );
};

export default PostCard;
