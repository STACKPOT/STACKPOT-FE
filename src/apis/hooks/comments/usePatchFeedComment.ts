import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchFeedComment } from "apis/commentAPI";
import { PatchFeedCommentParams } from "apis/types/comment";
import { useSnackbar } from "providers";

const usePatchFeedComment = (feedId: number) => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (params: PatchFeedCommentParams) => patchFeedComment(params),
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

export default usePatchFeedComment;
