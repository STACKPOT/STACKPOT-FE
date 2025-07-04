import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postFeedCommentsReplies } from "apis/feedAPI";
import { PostFeedCommentsRepliesParams } from "apis/types/feed";
import { useSnackbar } from "providers";

const usePostFeedCommentsReplies = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (params: PostFeedCommentsRepliesParams) =>
      postFeedCommentsReplies(params),
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

export default usePostFeedCommentsReplies;
