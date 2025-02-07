import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchTodo } from "apis/myPotAPI";
import { ApiResponse } from "apis/types/response"; 
import { Result } from "apis/types/todo"; 

export const usePatchTodo = () => {
  const queryClient = useQueryClient();

  return useMutation<ApiResponse<Result>, Error, { potId: number; data: { todoId: number | null, content: string, status: string }[] }>({
    mutationFn: ({ potId, data }) => patchTodo({ potId, data }), 
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error("Error during patchTodo:", error);
    },
  });
};
