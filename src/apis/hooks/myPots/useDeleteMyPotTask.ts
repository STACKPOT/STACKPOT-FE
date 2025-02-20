import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMyPotTask } from "apis/myPotAPI";
import { TaskAPIParams } from "apis/types/myPot";

export const useDeleteMyPotTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ potId, taskId }: TaskAPIParams) => deleteMyPotTask({ potId, taskId }),
    onSuccess: (_, { potId, taskId }) => {
      queryClient.setQueryData(["myPotTasks", potId], (oldData: any) => {
        if (!oldData || !oldData.result) return oldData; 

        const updatedResult = Object.entries(oldData.result).reduce(
          (acc: Record<string, any[]>, [status, tasks]: [string, any]) => {
            if (Array.isArray(tasks)) {
              acc[status] = tasks.filter((task) => task.taskboardId !== taskId);
            }
            return acc;
          },
          {} as Record<string, any[]>
        );

        const newData = { ...oldData, result: updatedResult };            
        return newData;
      });
    },
    onError: (error) => {
      console.error("❌ 삭제 실패:", error);
    },
  });
};

export default useDeleteMyPotTask;
