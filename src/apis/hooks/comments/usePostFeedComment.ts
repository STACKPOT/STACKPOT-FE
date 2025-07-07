import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postFeedComment } from "apis/commentAPI";
import { PostFeedCommentParams } from "apis/types/comment";
import { useSnackbar } from "providers";

const usePostFeedComment = () => {
  const { showSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: PostFeedCommentParams) => postFeedComment(params),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["feedComment", variables.feedId],
      });
    },
    onError: () => {
      showSnackbar({
        message: "댓글 작성에 실패했습니다.",
      });
    },
  });
};

export default usePostFeedComment;
