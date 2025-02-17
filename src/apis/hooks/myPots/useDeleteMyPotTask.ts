import { useMutation, useQueryClient  } from "@tanstack/react-query";
import { deleteMyPotTask } from "apis/myPotAPI";
import { TaskAPIParams } from "apis/types/myPot";

export const useDeleteMyPotTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ potId, taskId }: TaskAPIParams) => deleteMyPotTask({ potId, taskId }),
    onSuccess: (_, { potId }) => {
      queryClient.invalidateQueries({queryKey: ["myPotTasks", potId]});
    },
  });
};

export default useDeleteMyPotTask;