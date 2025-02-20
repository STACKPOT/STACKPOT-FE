import { useQuery } from "@tanstack/react-query";
import { getMyPotTask } from "apis/myPotAPI";
import { GetTaskParams } from "apis/types/myPot";

export const useGetMyPotTask = ({ potId }: GetTaskParams) => {
  return useQuery({
    queryKey: ["myPotTasks", potId],
    queryFn: () => getMyPotTask({ potId }),
  });
};
