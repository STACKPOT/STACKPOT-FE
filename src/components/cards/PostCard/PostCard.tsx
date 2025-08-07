import React, { useState } from "react";
import {
  cardStyle,
  profileContainer,
  profileImageStyle,
  nicknameStyle,
  titleStyle,
  contentStyle,
  dateStyle,
  iconContainer,
  nicknameDateContainer,
  moreIconStyle,
  headerContainer,
  textStyle,
  IconStyle,
  iconGroup,
} from "./PostCard.style";
import {
  SaveIcon,
  FillSaveIcon,
  LikeIcon,
  FillLikeIcon,
  CommentIcon,
} from "@assets/svgs";

import MyFeedDropdown from "@components/commons/Dropdown/MyFeedDropdown/MyFeedDropdown";
import { roleImages } from "@constants/roleImage";
import { Role } from "types/role";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import usePostFeedLike from "apis/hooks/feeds/usePostFeedLike";
import usePostFeedComment from "apis/hooks/comments/usePostFeedComment";
import usePostFeedSave from "apis/hooks/feeds/usePostFeedSave";
import useDeleteFeed from "apis/hooks/feeds/useDeleteFeed";

interface PostCardProps {
  role: Role;
  nickname: string;
  createdAt: string;
  title: string;
  content: string;
  likeCount: number;
  saveCount: number;
  commentCount: number;
  isLiked: boolean;
  isSaved: boolean;
  profileImage?: string;
  feedId: number;
  writerId: number;
  isMyPost: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  role,
  nickname,
  createdAt,
  title,
  content,
  likeCount,
  saveCount,
  commentCount,
  isLiked,
  isSaved,
  feedId,
  writerId,
  isMyPost,
}: PostCardProps) => {
  const navigate = useNavigate();

  const [isLike, setIsLike] = useState<boolean>(isLiked);
  const [likes, setLikes] = useState<number>(likeCount);
  const [isSave, setIsSave] = useState<boolean>(isSaved);
  const [saves, setSaves] = useState<number>(saveCount ?? 0);
  const CurrentLikeIcon = isLike ? FillLikeIcon : LikeIcon;
  const CurrentSaveIcon = isSave ? FillSaveIcon : SaveIcon;
  const profileImage = roleImages[role];

  const { mutate: likeFeed } = usePostFeedLike();
  const { mutate: saveFeed } = usePostFeedSave();
  const { mutate: commentFeed } = usePostFeedComment();
  const { mutate: deleteFeed } = useDeleteFeed();
  const accessToken = localStorage.getItem("accessToken");

  const handleLike = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    if (accessToken) {
      likeFeed(feedId, {
        onSuccess: () => {
          setIsLike((prev) => !prev);
          setLikes((prev) => (isLike ? prev - 1 : prev + 1));
        },
      });
    }
  };
  const handleSave = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    if (accessToken) {
      setIsSave((prev) => !prev);
      setSaves((prev) => (isSave ? prev - 1 : prev + 1));
      // saveFeed(feedId, {
      // 	onSuccess: () => {
      // 		setIsSave((prev) => !prev);
      // 		setSaves((prev) => (isSave ? prev - 1 : prev + 1));
      // 	},
      // });
    }
  };
  const handleComment = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    if (accessToken) {
      // commentFeed(feedId, {
      // 	onSuccess: () => {
      // 	},
      // });
    }
  };

  const handleEdit = () => {
    if (isMyPost) {
      navigate(`${routes.feed.edit}/${feedId}`);
    }
  };

  const handleDelete = () => {
    if (isMyPost) {
      deleteFeed(feedId);
    }
  };

  const handleFeedClick = () => {
    if (accessToken) {
      navigate(`${routes.feed.base}/${feedId}`);
      window.scrollTo(0, 0);
    }
  };

  const handleUserClick = (
    e: React.MouseEvent<HTMLElement>,
    userId: number
  ) => {
    e.stopPropagation();
    if (accessToken) {
      navigate(`${routes.userProfile}/${userId}`);
    }
  };

  return (
    <div css={cardStyle} onClick={handleFeedClick}>
      <div css={headerContainer}>
        <div css={profileContainer}>
          <img
            onClick={(e) => {
              handleUserClick(e, writerId);
            }}
            css={profileImageStyle}
            src={profileImage}
            alt="profile"
          />
          <div css={nicknameDateContainer}>
            <p
              onClick={(e) => {
                handleUserClick(e, writerId);
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
      <div css={iconContainer}>
        <div css={iconGroup}>
          <CurrentLikeIcon
            type="button"
            css={IconStyle(accessToken !== null)}
            onClick={handleLike}
          />
          <p css={textStyle}>{likes >= 100 ? "99+" : likes}</p>
        </div>
        <div css={iconGroup}>
          <CurrentSaveIcon
            type="button"
            css={IconStyle(accessToken !== null)}
            onClick={handleSave}
          />
          <p css={textStyle}>{saves >= 100 ? "99+" : saves}</p>
        </div>
        <div css={iconGroup}>
          <CommentIcon
            type="button"
            css={IconStyle(accessToken !== null)}
            onClick={handleComment}
          />
          <p css={textStyle}>{commentCount >= 100 ? "99+" : commentCount}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
