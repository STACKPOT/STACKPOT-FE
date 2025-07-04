import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postFeedComments } from "apis/feedAPI";
import { PostFeedCommentsParams } from "apis/types/feed";
import { useSnackbar } from "providers";

const usePostFeedComments = () => {
  const { showSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: PostFeedCommentsParams) => postFeedComments(params),
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

export default usePostFeedComments;
