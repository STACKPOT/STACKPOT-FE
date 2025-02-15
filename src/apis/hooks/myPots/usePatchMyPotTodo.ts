import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchMyPotTodo } from "apis/myPotAPI";
import { Todo } from "apis/types/myPot"; 

export const usePatchMyPotTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ potId, data }: { potId: number; data: Todo[] }) => patchMyPotTodo({ potId, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error("할 일 업데이트 실패:", error);
    },
  });
};
