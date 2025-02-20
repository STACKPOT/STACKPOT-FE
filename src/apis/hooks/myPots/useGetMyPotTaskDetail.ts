import { useQuery } from "@tanstack/react-query";
import { getMyPotTaskDetail } from "apis/myPotAPI";
import { TaskAPIParams } from "apis/types/myPot";

const useGetMyPotTaskDetail = ({ potId, taskId }: TaskAPIParams) => {
  return useQuery({
    queryKey: ["taskDetail"],
    queryFn: () => getMyPotTaskDetail({ potId, taskId }),
  });
};

export default useGetMyPotTaskDetail;
