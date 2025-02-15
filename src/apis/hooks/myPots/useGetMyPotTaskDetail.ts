import { useQuery } from "@tanstack/react-query";
import { getMyPotTaskDetail } from "apis/myPotAPI";
import { TaskAPIPrams } from "apis/types/myPot"; 

const useGetMyPotTaskDetail = ({ potId, taskId }: TaskAPIPrams) => {
  return useQuery({
    queryKey: ["taskDetail", potId, taskId],
    queryFn: () => getMyPotTaskDetail({ potId, taskId }),
    enabled: !!potId && !!taskId,
    select: (data) => data.result ?? null,
  });
};

export default useGetMyPotTaskDetail;
