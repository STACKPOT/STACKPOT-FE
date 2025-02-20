import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchMyPotTodoStatus } from "apis/myPotAPI";
import { PatchTodoStatusParams } from "apis/types/myPot";
import { useSnackbar } from "providers";

export const usePatchMyPotTodoStatus = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: ({ potId, todoId }: PatchTodoStatusParams) => patchMyPotTodoStatus({potId, todoId}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] }); 
      showSnackbar({
        message: "투두 상태가 수정되었습니다.",
        severity: "success",
      });
    },
    onError: () => {
      showSnackbar({
        message: "투두 상태가 수정에 실패했습니다.",
        severity: "error",
      });
    },
  });
};
