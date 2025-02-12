import { useQuery } from "@tanstack/react-query";
import { getTask } from "apis/myPotAPI";
import { ApiResponse } from "apis/types/response";
import { TaskResponse } from "apis/types/myPot";

export const useGetMyPotTask = (potId: number) => {
  return useQuery<ApiResponse<TaskResponse>>({
    queryKey: ["tasks", potId],
    queryFn: () => getTask(potId),
  });
};
