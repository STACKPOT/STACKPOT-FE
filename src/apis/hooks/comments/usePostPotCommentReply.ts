import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postPotCommentReply } from "apis/potAPI";
import { PostPotCommentReplyParams } from "apis/types/pot";
import { useSnackbar } from "providers";

const usePostPotCommentReply = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (params: PostPotCommentReplyParams) =>
      postPotCommentReply(params),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["potComment", variables.potId],
      });
    },
    onError: () => {
      showSnackbar({
        message: "댓글 작성에 실패하였습니다",
      });
    },
  });
};

export default usePostPotCommentReply;
