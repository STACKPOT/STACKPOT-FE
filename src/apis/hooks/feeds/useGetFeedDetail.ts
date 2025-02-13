import { useQuery } from "@tanstack/react-query";
import { getFeedDetail } from "apis/feedAPI";

const useGetFeedDetail = (feedId: number) => {
  return useQuery({
    queryKey: ["feedDetail", feedId],
    queryFn: () => getFeedDetail(feedId),
    select: (data) => data.result,
  });
};

export default useGetFeedDetail;
