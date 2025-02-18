import { useQuery } from "@tanstack/react-query";
import { getMyPotMembers } from "apis/myPotAPI";
import { GetTaskParams } from "apis/types/myPot";

export const useGetMyPotaMembers = ({ potId }: GetTaskParams) => {
  return useQuery({
    queryKey: ["myPotMembers", potId],
    queryFn: () => getMyPotMembers({potId}),
  });
};
