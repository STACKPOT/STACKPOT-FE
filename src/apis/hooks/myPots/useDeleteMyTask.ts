import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "apis/myPotAPI";

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ potId, taskId }: { potId: number; taskId: number }) => {
      return deleteTask(potId, taskId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] }); 
    },
    onError: (error) => {
      console.error("Task 삭제 실패:", error);
    },
  });
};
