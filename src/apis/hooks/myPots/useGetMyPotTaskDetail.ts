import { useQuery } from "@tanstack/react-query";
import { getMyPotTaskDetail } from "apis/myPotAPI";
import { TaskAPIPrams } from "apis/types/myPot"; 

const useGetMyPotTaskDetail = ({ potId, taskId }: TaskAPIPrams) => {
  return useQuery({
    queryKey: ["taskDetail", potId, taskId],
    queryFn: async () => {
      console.log(`Fetching taskDetail for potId=${potId}, taskId=${taskId}`);
      console.error(`Fetching taskDetail for potId=${potId}, taskId=${taskId}`);

      return getMyPotTaskDetail({ potId, taskId });
    },
  });
};


export default useGetMyPotTaskDetail;
