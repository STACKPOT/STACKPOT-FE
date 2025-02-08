import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchTodo } from "apis/myPotAPI";

export const usePatchMyTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ potId, data }: { potId: number; data: { todoId: number | null; content: string; status: string }[] }) => 
      patchTodo({ potId, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error("Error during patchTodo:", error);
    },
  });
};
