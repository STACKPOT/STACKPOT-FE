import { useQuery } from "@tanstack/react-query";
import { getMyPotOwner } from "apis/myPotAPI";
import { GetTaskParams } from "apis/types/myPot";

export const useGetMyPotOwner = ({potId}: GetTaskParams) => {
  return useQuery({
    queryKey: ["potOwner", potId],
    queryFn: () => getMyPotOwner({ potId }),
  });
};
