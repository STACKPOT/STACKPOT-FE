import {
  commentCountStyle,
  commentsContainer,
  container,
} from "./CommentSection.style";
import CommentWriter from "./CommentWriter";
import Comment from "./Comment";
import useGetFeedComments from "apis/hooks/feeds/useGetFeedComments";
import { useEffect, useRef, useState } from "react";
import { GetFeedCommentsResponse } from "apis/types/feed";
import usePostFeedComments from "apis/hooks/feeds/usePostFeedComments";

interface CommentSectionProps {
  type: "feed" | "pot";
  id: number;
}
const CommentSection: React.FC<CommentSectionProps> = ({
  type,
  id,
}: CommentSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data } =
    type === "feed" ? useGetFeedComments(id) : useGetFeedComments(id);
  const { mutate } = usePostFeedComments();

  const [comments, setComments] = useState<GetFeedCommentsResponse[]>([]);

  const handleSubmitComment = (comment: string) => {
    mutate(
      {
        feedId: id,
        comment: comment,
      },
      {
        onSuccess: () => {
          const scrollHeight = scrollRef.current?.clientHeight;
          window.scrollTo({
            top: scrollHeight,
            behavior: "smooth",
          });
        },
      }
    );
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
    <div css={container} ref={scrollRef}>
      <p css={commentCountStyle}>{`${comments.length}개의 댓글`}</p>
      <CommentWriter onSubmit={handleSubmitComment} onCancel={() => {}} />
      <div css={commentsContainer}>
        {comments.map((comment) => (
          <Comment {...comment} />
        ))}
      </div>
    </div>
  );
};
export default CommentSection;
