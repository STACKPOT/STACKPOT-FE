import { deletedComment, deletedCommentText } from "./DeletedComment.style";

const DeletedComment = () => {
  return (
    <div css={deletedComment}>
      <p css={deletedCommentText}>삭제된 댓글입니다.</p>
    </div>
  );
};

export default DeletedComment;
