import { useQuery } from "@tanstack/react-query";
import { getFeedDetails } from "apis/feedAPI";

const useGetFeedDetails = (feedId: number) => {
  return useQuery({
    queryKey: ["feedDetail", feedId],
    queryFn: () => getFeedDetails(feedId),
    select: (data) => data.result,
  });
};

export default useGetFeedDetails;
