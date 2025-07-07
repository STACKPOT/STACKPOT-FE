import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postFeedCommentReply } from "apis/commentAPI";
import { PostFeedCommentReplyParams } from "apis/types/comment";
import { useSnackbar } from "providers";

const usePostFeedCommentReply = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (params: PostFeedCommentReplyParams) =>
      postFeedCommentReply(params),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["feedComment", variables.feedId],
      });
    },
    onError: () => {
      showSnackbar({
        message: "댓글 작성에 실패하였습니다",
      });
    },
  });
};

export default usePostFeedCommentReply;
