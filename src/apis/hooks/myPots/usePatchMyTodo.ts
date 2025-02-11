import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchTodo } from "apis/myPotAPI";
import { Todo } from "apis/types/myPot"; 

export const usePatchMyTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ potId, data }: { potId: number; data: Todo[] }) => patchTodo({ potId, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error("할 일 업데이트 실패:", error);
    },
  });
};
