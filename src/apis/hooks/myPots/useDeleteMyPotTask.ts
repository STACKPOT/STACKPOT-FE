import { useMutation } from "@tanstack/react-query";
import { deleteMyPotTask } from "apis/myPotAPI";
import { TaskAPIParams } from "apis/types/myPot";

const useDeleteMyPotTask = () => {
  return useMutation({
    mutationFn: ({ potId, taskId }: TaskAPIParams) => deleteMyPotTask({ potId, taskId }),
  });
};

export default useDeleteMyPotTask;
