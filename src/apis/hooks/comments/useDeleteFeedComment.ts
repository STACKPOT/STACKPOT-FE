import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFeedComment } from "apis/commentAPI";
import { useSnackbar } from "providers";

const useDeleteFeedComment = (feedId: number) => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (commentId: number) => deleteFeedComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["feedComment", feedId],
      });
    },
    onError: () => {
      showSnackbar({
        message: "댓글 삭제에 실패했습니다.",
      });
    },
  });
};

export default useDeleteFeedComment;
