import { useQuery } from "@tanstack/react-query";
import { getPotSummary } from "apis/userAPI";

const useGetPotSummary = (potId: number) => {
  return useQuery({
    queryKey: ["potSummary", potId],
    queryFn: () => getPotSummary(potId),
    select: (data) => data.result,
  });
};

export default useGetPotSummary;
