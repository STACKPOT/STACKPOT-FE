import { useMutation } from "@tanstack/react-query";
import { patchTodo } from "../../patchTodoAPI";
import { ApiResponse } from "apis/types/response"; 
import { Result } from "apis/types/todo"; 

export const usePatchTodo = () => {
  const mutation = useMutation<ApiResponse<Result>, Error, { potId: number; tasks: { todoId: number | null, content: string, status: string }[] }>({
    mutationFn: ({ potId, tasks }) => patchTodo(potId, tasks),
    onError: (error) => {
      console.error("Error during patchTodo:", error);
    },
  });

  return { patchTodoRequest: mutation.mutate };
};
