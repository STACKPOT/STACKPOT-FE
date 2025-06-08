import { commentData } from "mocks/commentData"
import { commentCountStyle, commentsContainer, container } from "./CommentSection.style"
import CommentWriter from "./CommentWriter"
import Comment from "./Comment"

interface CommentSectionProps {

}
const CommentSection: React.FC<CommentSectionProps> = ({ }: CommentSectionProps) => {
  return (
    <div css={container}>
      <p css={commentCountStyle}>{`${3}개의 댓글`}</p>
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