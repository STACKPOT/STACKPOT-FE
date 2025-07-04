import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postFeedCommentReply } from "apis/feedAPI";
import { PostFeedCommentReplyParams } from "apis/types/feed";
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
