import { useMutation } from "@tanstack/react-query";
import { deleteMyPotTask } from "apis/myPotAPI";
import { TaskAPIPrams } from "apis/types/myPot";

const useDeleteMyPotTask = () => {
  return useMutation({
    mutationFn: ({ potId, taskId }: TaskAPIPrams) => deleteMyPotTask({ potId, taskId }),
  });
};

export default useDeleteMyPotTask;
