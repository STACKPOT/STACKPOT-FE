import { useQuery } from "@tanstack/react-query";
import { getFeedSeries, getUserFeedSeries } from "apis/userAPI";

const useGetFeedSeries = (userId?: number) => {
  return useQuery({
    queryKey: ["series", userId !== undefined ? userId : "me"],
    queryFn: () => userId !== undefined ? getUserFeedSeries(userId) : getFeedSeries(),
    select: (data) => data.result,
  });
};
export default useGetFeedSeries;
