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
  id: number;
  role: Role;
  nickname: string;
  createdAt: string;
  title: string;
  content: string;
  likeCount: number;
  isLiked: boolean;
  profileImage?: string;
  isMyPost?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  role,
  nickname,
  createdAt,
  title,
  content,
  likeCount,
  isLiked,
  isMyPost = false,
}: PostCardProps) => {
  const { mutate: likeFeed } = usePostFeedLike();
  const navigate = useNavigate();
  const [isLike, setIsLike] = useState<boolean>(isLiked);
  const [likes, setLikes] = useState<number>(likeCount);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );

  const handleCardClick = () => {
    navigate(`${routes.feed}/${id}`);
    window.scrollTo(0, 0);
  };

  const handleLike = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    if (accessToken) {
      likeFeed(id, {
        onSuccess: () => {
          setIsLike(!isLike);
          setLikes((prev) => (isLike ? prev - 1 : prev + 1));
        }
      })
    }
  };

  const handleEdit = () => {
    navigate(`${routes.editPost}/${id}`);
    window.scrollTo(0, 0);
  };
  const handleDelete = () => {
    // todo: 삭제하기 api
  };

  const profileImage = roleImages[role];

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setAccessToken(token);
  }, [localStorage.getItem("accessToken")])

  return (
    <div css={cardStyle} onClick={handleCardClick}>
      <div css={headerContainer}>
        <div css={profileContainer}>
          <img css={profileImageStyle} src={profileImage} alt="profile" />
          <div css={nicknameDateContainer}>
            <p css={nicknameStyle}>{nickname}</p>
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
