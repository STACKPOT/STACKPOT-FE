import {
  editCommentContainer,
  editCommentTextAreaStyle,
  nicknameStyle,
  recommentCancelStyle,
  submitButtonContainer,
} from "./EditingComment.style";
import Button from "../Button/Button";
import { useEffect, useRef, useState } from "react";
import usePatchFeedComment from "apis/hooks/comments/usePatchFeedComment";
import usePatchPotComment from "apis/hooks/comments/usePatchPotComment";
import { profileContainer, profileImageStyle } from "./Comment.style";
import { SproutImage } from "@assets/images";

interface EditingCommentProps {
  id: number;
  userName: string;
  comment: string;
  commentId: number;
  type: "feed" | "pot";
  closeEdit: () => void;
}

const EditingComment: React.FC<EditingCommentProps> = ({
  id,
  userName,
  comment,
  commentId,
  type,
  closeEdit,
}: EditingCommentProps) => {
  const editRef = useRef<HTMLTextAreaElement>(null);
  const [editValue, setEditValue] = useState(comment);

  const { mutate: editComment } =
    type === "feed" ? usePatchFeedComment(id) : usePatchPotComment(id);

  const handleSubmitEdit = () => {
    editComment({
      commentId: commentId,
      comment: editValue,
    });
    closeEdit();
  };

  useEffect(() => {
    if (editRef.current) {
      editRef.current.style.height = "0px";
      editRef.current.style.height = editRef.current.scrollHeight + "px";
    }
  }, [editValue]);

  return (
    <>
      <div css={editCommentContainer}>
        <div css={profileContainer}>
          <img css={profileImageStyle} src={SproutImage} alt="profile" />
          <p css={nicknameStyle}>{userName}</p>
        </div>
        <textarea
          css={editCommentTextAreaStyle}
          ref={editRef}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      </div>
      <div css={submitButtonContainer}>
        <button css={recommentCancelStyle} onClick={closeEdit}>
          취소
        </button>
        <Button variant="action" onClick={handleSubmitEdit}>
          댓글 작성
        </Button>
      </div>
    </>
  );
};

export default EditingComment;
