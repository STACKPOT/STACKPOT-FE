import { useQuery } from "@tanstack/react-query";
import { getMyPagesPotAppealContent, getUsersMyPagesPotAppealContent } from "apis/userAPI";

const useGetProfilePotAppealContent = (potId: number, userId?: number) => {
  return useQuery({
    queryKey: ['profile', 'feeds', potId, userId === undefined ? 'me' : userId],
    queryFn: () => (userId !== undefined ? getUsersMyPagesPotAppealContent(potId, userId) : getMyPagesPotAppealContent(potId)),
    select: (data) => data.result,
  });
};

export default useGetProfilePotAppealContent;
