import {
  commentCountStyle,
  commentsContainer,
  container,
} from "./CommentSection.style";
import CommentWriter from "./CommentWriter";
import Comment from "./Comment";
import useGetFeedComment from "apis/hooks/feeds/useGetFeedComment";
import { useEffect, useRef, useState } from "react";
import { CommentResponse, GetFeedCommentsResponse } from "apis/types/feed";
import usePostFeedComment from "apis/hooks/feeds/usePostFeedComment";
import useGetPotComment from "apis/hooks/pots/useGetPotComment";
import { GetPotCommentResponse } from "apis/types/pot";

interface CommentSectionProps {
  type: "feed" | "pot";
  id: number;
}

function flattenComments<T>(list: CommentResponse[]) {
  const result: CommentResponse[] = [];

  const traverse = (comments: CommentResponse[]) => {
    if (comments) {
      comments.forEach((comment) => {
        result.push(comment);
        if (comment.children && comment.children.length > 0) {
          traverse(comment.children);
        }
      });
    }
  };
  traverse(list);
  return result as T;
}

const CommentSection: React.FC<CommentSectionProps> = ({
  type,
  id,
}: CommentSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data } =
    type === "feed" ? useGetFeedComment(id) : useGetPotComment(id);
  const { mutate } = usePostFeedComment();

  const [comments, setComments] = useState<
    GetFeedCommentsResponse[] | GetPotCommentResponse[]
  >([]);

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
    const flatComments = flattenComments<typeof data>(data);
    setComments(flatComments);
  }, [data]);

  return (
    <div css={container} ref={scrollRef}>
      <p css={commentCountStyle}>{`${comments.length}개의 댓글`}</p>
      <CommentWriter onSubmit={handleSubmitComment} onCancel={() => {}} />
      <div css={commentsContainer}>
        {comments.map((comment) => (
          <Comment id={id} type={type} {...comment} />
        ))}
      </div>
    </div>
  );
};
export default CommentSection;
