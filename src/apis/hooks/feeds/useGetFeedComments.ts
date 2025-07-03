import { useQuery } from "@tanstack/react-query";
import { getFeedComments } from "apis/feedAPI";

const useGetFeedComments = (feedId: number) => {
  return useQuery({
    queryKey: ["feedComment", feedId],
    queryFn: () => getFeedComments(feedId),
    select: (data) => data.result,
  });
};

export default useGetFeedComments;
