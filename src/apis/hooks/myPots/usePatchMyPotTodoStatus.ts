import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchMyPotTodoStatus } from "apis/myPotAPI";
import { PatchTodoStatusParams } from "apis/types/myPot";

export const usePatchMyPotTodoStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ potId, todoId }: PatchTodoStatusParams) => patchMyPotTodoStatus({potId, todoId}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] }); 
    },
    onError: (error) => {
      console.error("할 일 상태 변경 실패:", error);
    },
  });
};
