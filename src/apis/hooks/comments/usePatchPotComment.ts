import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchPotComment } from "apis/commentAPI";
import { PatchCommentParams } from "apis/types/comment";
import { useSnackbar } from "providers";

const usePatchPotComment = (potId: number) => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (params: PatchCommentParams) => patchPotComment(params),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["potComment", potId],
      });
    },
    onError: () => {
      showSnackbar({
        message: "댓글 수정에 실패했습니다.",
      });
    },
  });
};

export default usePatchPotComment;
