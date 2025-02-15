import { useQuery } from "@tanstack/react-query";
import { getMyPotTask } from "apis/myPotAPI";

export const useGetMyPotTask = (potId: number) => {
  return useQuery({
    queryKey: ["tasks", potId],
    queryFn: () => getMyPotTask(potId),
  });
};
