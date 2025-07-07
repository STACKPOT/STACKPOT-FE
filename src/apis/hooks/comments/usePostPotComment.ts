import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postPotComment } from "apis/commentAPI";
import { PostPotCommentParams } from "apis/types/comment";
import { useSnackbar } from "providers";

const usePostPotComment = () => {
  const { showSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: PostPotCommentParams) => postPotComment(params),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["potComment", variables.potId],
      });
    },
    onError: () => {
      showSnackbar({
        message: "댓글 작성에 실패했습니다.",
      });
    },
  });
};

export default usePostPotComment;
