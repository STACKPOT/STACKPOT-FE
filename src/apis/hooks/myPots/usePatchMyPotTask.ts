import { useMutation } from "@tanstack/react-query";
import { patchMyPotTask } from "apis/myPotAPI";
import { TaskAPIParams, TaskPatch } from "apis/types/myPot";

const usePatchMyPotTask = () => {
  return useMutation({
    mutationFn: async ({ potId, taskId, data }: TaskAPIParams & { data: TaskPatch }) => {
      const response = await patchMyPotTask({ potId, taskId }, data);
      return response;
    }
  });
};


export default usePatchMyPotTask;
