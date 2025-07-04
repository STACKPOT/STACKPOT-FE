import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchFeedComments } from "apis/feedAPI";
import { PatchFeedCommentsParams } from "apis/types/feed";
import { useSnackbar } from "providers";

const usePatchFeedComments = (feedId: number) => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (params: PatchFeedCommentsParams) => patchFeedComments(params),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["feedComment", feedId],
      });
    },
    onError: () => {
      showSnackbar({
        message: "댓글 수정에 실패했습니다.",
      });
    },
  });
};

export default usePatchFeedComments;
