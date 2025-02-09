import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchTodo } from "apis/myPotAPI";
import { TodoUpdateRequest } from "apis/types/todo";

export const usePatchMyTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ potId, data }: TodoUpdateRequest) => patchTodo({ potId, data }), 
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error("Error during patchTodo:", error);
    },
  });
};
