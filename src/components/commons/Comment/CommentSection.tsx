import {
  commentCountStyle,
  commentListContainer,
  commentContainer,
} from "./CommentSection.style";
import CommentWriter from "./CommentWriter";
import Comment from "./Comment";
import useGetFeedComment from "apis/hooks/comments/useGetFeedComment";
import { useEffect, useRef, useState } from "react";
import usePostFeedComment from "apis/hooks/comments/usePostFeedComment";
import useGetPotComment from "apis/hooks/comments/useGetPotComment";
import usePostPotComment from "apis/hooks/comments/usePostPotComment";
import {
  CommentResponse,
  GetFeedCommentsResponse,
  GetPotCommentResponse,
} from "apis/types/comment";

interface CommentSectionProps {
  type: "feed" | "pot";
  id: number;
}

function flattenComments<T extends CommentResponse[]>(list: T) {
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
  const { mutate: submitFeedComment } = usePostFeedComment();
  const { mutate: submitPotComment } = usePostPotComment();

  const [comments, setComments] = useState<
    GetFeedCommentsResponse[] | GetPotCommentResponse[]
  >([]);

  const handleSubmitComment = (comment: string) => {
    const onSuccess = {
      onSuccess: () => {
        if (scrollRef.current) {
          const scrollHeight =
            window.scrollY + scrollRef.current.getBoundingClientRect().bottom;
          window.scrollTo({
            top: scrollHeight,
            behavior: "smooth",
          });
        }
      },
    };

    if (type === "feed") {
      submitFeedComment(
        {
          feedId: id,
          comment: comment,
        },
        onSuccess
      );
    } else {
      submitPotComment(
        {
          potId: id,
          comment: comment,
        },
        onSuccess
      );
    }
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
    <div css={commentContainer} ref={scrollRef} id="container">
      <p css={commentCountStyle}>{`${comments.length}개의 댓글`}</p>
      <CommentWriter onSubmit={handleSubmitComment} onCancel={() => {}} />
      <div css={commentListContainer}>
        {comments.map((comment) => (
          <Comment key={id} id={id} type={type} {...comment} />
        ))}
      </div>
    </div>
  );
};
export default CommentSection;
