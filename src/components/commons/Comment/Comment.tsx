import { PlusButtonIcon } from "@assets/svgs";
import {
  container,
  contentStyle,
  dateStyle,
  deletedComment,
  deletedCommentText,
  editCommentContainer,
  editCommentTextAreaStyle,
  meatballIconStyle,
  nicknameContainer,
  nicknameStyle,
  openRecommentContainer,
  openRecommentIconStyle,
  openRecommentTextStyle,
  profileContainer,
  profileImageStyle,
  profileTextContainer,
  recommentCancelStyle,
  submitButtonContainer,
  textAreaStyle,
} from "./Comment.style";
import Button from "../Button/Button";
import { Role } from "types/role";
import { roleImages } from "@constants/roleImage";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import React, { useEffect, useRef, useState } from "react";
import MyFeedDropdown from "../Dropdown/MyFeedDropdown/MyFeedDropdown";
import CommentWriter from "./CommentWriter";
import Badge from "../Badge/Badge";
import Modal from "../Modal/Modal";
import usePostFeedCommentReply from "apis/hooks/feeds/usePostFeedCommentReply";
import usePatchFeedComment from "apis/hooks/feeds/usePatchFeedComment";
import useDeleteFeedComment from "apis/hooks/feeds/useDeleteFeedComment";

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
  const [editValue, setEditValue] = useState(comment);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { mutate: submitRecomment } = usePostFeedCommentReply();
  const { mutate: editComment } = usePatchFeedComment(id);
  const { mutate: deleteComment } = useDeleteFeedComment(id);

  const editRef = useRef<HTMLTextAreaElement>(null);

  const handleNicknameClick = () => {
    navigate(`${routes.userProfile}/${userId}`);
    window.scrollTo(0, 0);
  };
  const handleOpenRecomment = () => {
    setOpenRecomment(!openRecomment);
  };
  const handleSubmitRecomment = (recomment: string) => {
    submitRecomment(
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
  };
  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setEditValue(comment);
    }
  };
  const handleEditInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditValue(e.target.value);
    if (editRef.current) {
      editRef.current.style.height = "0px";
      editRef.current.style.height = editRef.current.scrollHeight + "px";
    }
  };
  const handleSubmitEdit = () => {
    editComment({
      commentId: commentId,
      comment: editValue,
    });
    setIsEditing(false);
  };
  const handleDelete = () => {
    deleteComment(commentId, {
      onSuccess: () => {
        setIsDeleteModalOpen(false);
      },
    });
  };

  useEffect(() => {
    if (isEditing) {
      if (editRef.current) {
        editRef.current.style.height = "0px";
        editRef.current.style.height = editRef.current.scrollHeight + "px";
      }
    }
  }, [isEditing]);

  return (
    <div css={container(parentCommentId !== null, isDeleted ?? false)}>
      {isDeleted ? (
        <div css={deletedComment}>
          <p css={deletedCommentText}>삭제된 댓글입니다.</p>
        </div>
      ) : (
        <>
          {!isEditing ? (
            <>
              <div css={profileContainer}>
                <img css={profileImageStyle} src={roleImages[role]} />
                <div css={profileTextContainer}>
                  <div css={nicknameContainer}>
                    <a
                      css={nicknameStyle(isCommentWriter)}
                      onClick={handleNicknameClick}
                    >
                      {userName}
                    </a>
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
                      onTop={handleEdit}
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
            <>
              <div css={editCommentContainer}>
                <div css={profileContainer}>
                  <img css={profileImageStyle} src={roleImages[role]} />
                  <p css={nicknameStyle(isCommentWriter)}>{userName}</p>
                </div>
                <textarea
                  css={editCommentTextAreaStyle}
                  ref={editRef}
                  value={editValue}
                  onChange={(e) => handleEditInputChange(e)}
                />
              </div>
              <div css={submitButtonContainer}>
                <button css={recommentCancelStyle} onClick={handleEdit}>
                  취소
                </button>
                <Button variant="action" onClick={handleSubmitEdit}>
                  댓글 작성
                </Button>
              </div>
            </>
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
