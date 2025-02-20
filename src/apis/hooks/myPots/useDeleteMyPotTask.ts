import { useMutation  } from "@tanstack/react-query";
import { deleteMyPotTask } from "apis/myPotAPI";
import { TaskAPIParams } from "apis/types/myPot";

export const useDeleteMyPotTask = () => {

  return useMutation({
    mutationFn: ({ potId, taskId }: TaskAPIParams) => deleteMyPotTask({ potId, taskId }),
  });
};

export default useDeleteMyPotTask;