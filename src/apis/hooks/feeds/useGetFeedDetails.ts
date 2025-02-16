import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getFeedDetails, getFeeds } from "apis/feedAPI";
import { GetFeedDetailParams } from "apis/types/feed";

const useGetFeedDetails = ({ feedId }: GetFeedDetailParams) => {
  return useQuery({
    queryKey: ["feedDetail", feedId],
    queryFn: () => getFeedDetails(feedId),
    select: (data) => data.result,
  });
};

export default useGetFeedDetails;
