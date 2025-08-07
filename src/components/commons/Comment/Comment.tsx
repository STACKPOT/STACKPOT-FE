import { PlusButtonIcon } from "@assets/svgs";
import {
  container,
  contentStyle,
  dateStyle,
  meatballIconStyle,
  nicknameContainer,
  nicknameStyle,
  openRecommentContainer,
  openRecommentIconStyle,
  openRecommentTextStyle,
  profileContainer,
  profileImageStyle,
  profileTextContainer,
  textAreaStyle,
} from "./Comment.style";
import { Role } from "types/role";
import { roleImages } from "@constants/roleImage";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import React, { useState } from "react";
import MyFeedDropdown from "../Dropdown/MyFeedDropdown/MyFeedDropdown";
import CommentWriter from "./CommentWriter";
import Badge from "../Badge/Badge";
import Modal from "../Modal/Modal";
import usePostFeedCommentReply from "apis/hooks/comments/usePostFeedCommentReply";
import useDeleteFeedComment from "apis/hooks/comments/useDeleteFeedComment";
import usePostPotCommentReply from "apis/hooks/comments/usePostPotCommentReply";
import useDeletePotComment from "apis/hooks/comments/useDeletePotComment";
import EditingComment from "./EditingComment";
import DeletedComment from "./DeletedComent";

interface CommentProps {
  id: number;
  type: "feed" | "pot";
  userId: number;
  role: Role;
  userName: string;
  createdAt: string;
  comment: string;
  commentId: number;
  parentCommentId: number;
  isCommentWriter: boolean;
  isDeleted?: boolean;
  isFeedWriter?: boolean;
  isPotWriter?: boolean;
}

const Comment: React.FC<CommentProps> = ({
  id,
  type,
  userId,
  role,
  userName,
  createdAt,
  comment,
  commentId,
  parentCommentId,
  isCommentWriter,
  isDeleted,
  isFeedWriter,
  isPotWriter,
}: CommentProps) => {
  const navigate = useNavigate();

  const [openRecomment, setOpenRecomment] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { mutate: submitFeedRecomment } = usePostFeedCommentReply();
  const { mutate: submitPotRecomment } = usePostPotCommentReply();
  const { mutate: deleteComment } =
    type === "feed" ? useDeleteFeedComment(id) : useDeletePotComment(id);

  const handleNicknameClick = () => {
    navigate(`${routes.userProfile}/${userId}`);
    window.scrollTo(0, 0);
  };
  const handleOpenRecomment = () => {
    setOpenRecomment(!openRecomment);
  };
  const handleSubmitRecomment = (recomment: string) => {
    if (type === "feed") {
      submitFeedRecomment(
        {
          feedId: id,
          comment: recomment,
          parentCommentId: commentId,
        },
        {
          onSuccess: () => {
            setOpenRecomment(false);
          },
        }
      );
    } else {
      submitPotRecomment(
        {
          potId: id,
          comment: recomment,
          parentCommentId: commentId,
        },
        {
          onSuccess: () => {
            setOpenRecomment(false);
          },
        }
      );
    }
  };

  const handleDelete = () => {
    deleteComment(commentId, {
      onSuccess: () => {
        setIsDeleteModalOpen(false);
      },
    });
  };

  return (
    <div css={container(parentCommentId !== null, isDeleted ?? false)}>
      {isDeleted ? (
        <DeletedComment />
      ) : (
        <>
          {!isEditing ? (
            <>
              <div css={profileContainer}>
                <img
                  css={profileImageStyle}
                  src={roleImages[role]}
                  alt="profile"
                />
                <div css={profileTextContainer}>
                  <div css={nicknameContainer}>
                    <button
                      css={nicknameStyle(isCommentWriter)}
                      onClick={handleNicknameClick}
                    >
                      {userName}
                    </button>
                    {(isFeedWriter || isPotWriter) && (
                      <Badge content="작성자" color="blue" />
                    )}
                  </div>
                  <p css={dateStyle}>{createdAt}</p>
                </div>
                {isCommentWriter && (
                  <div
                    css={meatballIconStyle}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <MyFeedDropdown
                      topMessage="수정하기"
                      bottomMessage="삭제하기"
                      onTop={() => setIsEditing(true)}
                      onBottom={() => setIsDeleteModalOpen(true)}
                    />
                  </div>
                )}
              </div>
              <p css={contentStyle}>{comment}</p>
              <button
                css={openRecommentContainer}
                onClick={handleOpenRecomment}
              >
                <PlusButtonIcon css={openRecommentIconStyle} />
                <p css={openRecommentTextStyle}>답글 달기</p>
              </button>
              {openRecomment && (
                <CommentWriter
                  onSubmit={handleSubmitRecomment}
                  onCancel={handleOpenRecomment}
                  textAreaCustomStyle={textAreaStyle}
                />
              )}
            </>
          ) : (
            <EditingComment
              id={id}
              role={role}
              userName={userName}
              comment={comment}
              commentId={commentId}
              type={type}
              closeEdit={() => setIsEditing(false)}
            />
          )}
        </>
      )}
      {isDeleteModalOpen && (
        <Modal
          title="댓글을 삭제하시겠습니까?"
          message="삭제하시면 복구할 수 없습니다. 정말로 삭제할까요?"
          confirmType="neg"
          confirmButton="삭제하기"
          onConfirm={handleDelete}
          onCancel={() => setIsDeleteModalOpen(false)}
        />
      )}
    </div>
  );
};
export default Comment;
