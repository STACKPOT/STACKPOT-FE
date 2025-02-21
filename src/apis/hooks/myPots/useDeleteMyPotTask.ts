import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMyPotTask } from "apis/myPotAPI";
import { TaskAPIParams } from "apis/types/myPot";
import { useSnackbar } from "providers";

export const useDeleteMyPotTask = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

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
      showSnackbar({
        message: "업무가 삭제되었습니다.",
        severity: "success",
      });
    },
    onError: () => {
      showSnackbar({
        message: "업무 삭제에 실패하였습니다.",
        severity: "error",
      });
    },
  });
};

export default useDeleteMyPotTask;