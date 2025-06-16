import { commentData } from "mocks/commentData"
import { commentCountStyle, commentsContainer, container } from "./CommentSection.style"
import CommentWriter from "./CommentWriter"
import Comment from "./Comment"

interface CommentSectionProps {
}
const CommentSection: React.FC<CommentSectionProps> = ({ }: CommentSectionProps) => {
  const handleSubmitComment = ()=>{
    // 댓글 작성 api 호출
  }

  return (
    <div css={container}>
      <p css={commentCountStyle}>{`${commentData.length}개의 댓글`}</p>
      <CommentWriter
        onSubmit={() => { }}
        onCancel={() => { }} />
      <div css={commentsContainer}>
        {commentData.map((comment) =>
          <Comment {...comment} />
        )}
      </div>
    </div>
  )
}
export default CommentSection;