import {
  commentCountStyle,
  commentsContainer,
  container,
} from "./CommentSection.style";
import CommentWriter from "./CommentWriter";
import Comment from "./Comment";
import useGetFeedComments from "apis/hooks/feeds/useGetFeedComments";
import { useEffect, useState } from "react";
import { GetFeedCommentsResponse } from "apis/types/feed";

interface CommentSectionProps {
  type: "feed" | "pot";
  id: number;
}
const CommentSection: React.FC<CommentSectionProps> = ({
  type,
  id,
}: CommentSectionProps) => {
  const { data } =
    type === "feed" ? useGetFeedComments(id) : useGetFeedComments(id);
  const [comments, setComments] = useState<GetFeedCommentsResponse[]>([]);

  const handleSubmitComment = () => {
    // 댓글 작성 api 호출
  };

  useEffect(() => {
    if (!data) {
      setComments([]);
      return;
    }
    const flatComments = flattenComments(data);
    setComments(flatComments);
  }, [data]);

  const flattenComments = (
    list: GetFeedCommentsResponse[]
  ): GetFeedCommentsResponse[] => {
    const result: GetFeedCommentsResponse[] = [];

    const traverse = (comments: GetFeedCommentsResponse[]) => {
      comments.forEach((comment) => {
        result.push(comment);
        if (comment.children && comment.children.length > 0) {
          traverse(comment.children);
        }
      });
    };
    traverse(list);
    return result;
  };

  return (
    <div css={container}>
      <p css={commentCountStyle}>{`${comments.length}개의 댓글`}</p>
      <CommentWriter onSubmit={() => {}} onCancel={() => {}} />
      <div css={commentsContainer}>
        {comments.map((comment) => (
          <Comment {...comment} />
        ))}
      </div>
    </div>
  );
};
export default CommentSection;
