import {
  commentCountStyle,
  commentsContainer,
  container,
} from "./CommentSection.style";
import CommentWriter from "./CommentWriter";
import Comment from "./Comment";
import useGetFeedComments from "apis/hooks/feeds/useGetFeedComments";

interface CommentSectionProps {
  type: "feed" | "pot";
  id: number;
}
const CommentSection: React.FC<CommentSectionProps> = ({
  type,
  id,
}: CommentSectionProps) => {
  const handleSubmitComment = () => {
    // 댓글 작성 api 호출
  };
  const { data } =
    type === "feed" ? useGetFeedComments(id) : useGetFeedComments(id);

  return (
    <div css={container}>
      {data && <p css={commentCountStyle}>{`${data.length}개의 댓글`}</p>}
      <CommentWriter onSubmit={() => {}} onCancel={() => {}} />
      <div css={commentsContainer}>
        {data && data.map((comment) => <Comment {...comment} />)}
      </div>
    </div>
  );
};
export default CommentSection;
