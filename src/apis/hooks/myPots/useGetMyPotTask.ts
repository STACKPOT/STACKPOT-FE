import { useQuery } from "@tanstack/react-query";
import { getTask } from "apis/myPotAPI";

export const useGetMyPotTask = (potId: number) => {
  return useQuery({
    queryKey: ["tasks", potId],
    queryFn: () => getTask(potId),
  });
};
