import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePotComment } from "apis/commentAPI";
import { useSnackbar } from "providers";

const useDeletePotComment = (potId: number) => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (commentId: number) => deletePotComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["potComment", potId],
      });
    },
    onError: () => {
      showSnackbar({
        message: "댓글 삭제에 실패했습니다.",
      });
    },
  });
};

export default useDeletePotComment;
