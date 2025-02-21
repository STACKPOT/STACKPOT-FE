import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchMyPotTodo } from "apis/myPotAPI";
import { Todo } from "apis/types/myPot";
import { useSnackbar } from "providers";

export const usePatchMyPotTodo = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: ({ potId, data }: { potId: number; data: Todo[] }) =>
      patchMyPotTodo({ potId, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      showSnackbar({
        message: "할 일이 업데이트되었습니다.",
        severity: "success",
      });
    },
    onError: () => {
      showSnackbar({
        message: "할 일 변경에 실패했습니다.",
        severity: "error",
      });    },
  });
};
