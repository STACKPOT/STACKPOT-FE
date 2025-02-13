import { useQuery } from "@tanstack/react-query";
import { getTaskDetail } from "apis/myPotAPI";

const useGetMyPotTaskDetail = (potId: number, taskId: number) => {
  return useQuery({
    queryKey: ["taskDetail", potId, taskId],
    queryFn: () => getTaskDetail(potId, taskId),
    enabled: !!potId && !!taskId,
    select: (data) => data.result ?? null,
  });
};

export default useGetMyPotTaskDetail;
