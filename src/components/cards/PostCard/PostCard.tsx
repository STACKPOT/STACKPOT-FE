import React, { useState } from "react";
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

interface PostCardProps {
  role: Role
  nickname: string;
  createdAt: string;
  title: string;
  content: string;
  likeCount: number;
  isLiked: boolean;
  profileImage?: string;
}

const PostCard: React.FC<PostCardProps> = ({
  role,
  nickname,
  createdAt,
  title,
  content,
  likeCount,
  isLiked,
}: PostCardProps) => {
  const [isLike, setIsLike] = useState<boolean>(isLiked);
  const [likes, setLikes] = useState<number>(likeCount);
  const [isMyPost, setIsMyPost] = useState<boolean>(true);
  const handleLike = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsLike(!isLike);
    setLikes((prev) => (isLike ? prev - 1 : prev + 1));
  };
  const handleClickCard = () => {
    // todo: 게시글 페이지로 이동
    console.log("click card");
  };
  const handleEdit = () => {
    // todo: 수정 페이지로 이동
  };
  const handleDelete = () => {
    // todo: 삭제하기 api
  };

  const profileImage = roleImages[role];

  return (
    <div css={cardStyle} onClick={handleClickCard}>
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
      <div css={likeContainer} onClick={handleLike}>
        <LikeIcon css={likeIconStyle(isLike)} />
        <p css={likeTextStyle}>{likes}</p>
      </div>
    </div>
  );
};

export default PostCard;
