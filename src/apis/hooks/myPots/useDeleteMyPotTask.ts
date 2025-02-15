import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMyPotTask } from "apis/myPotAPI";
import { TaskAPIPrams } from "apis/types/myPot";

export const useDeleteMyPotTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ potId, taskId }: TaskAPIPrams) => {
      return deleteMyPotTask({ potId, taskId });
    },
    onSuccess: (_, { potId }) => {
      queryClient.invalidateQueries({ queryKey: ["tasks", potId] });
    },
    onError: (error) => {
      console.error("Task 삭제 실패:", error);
    },
  });
};
