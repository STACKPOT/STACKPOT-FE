import { useQuery } from "@tanstack/react-query";
import { getFeedComments } from "apis/commentAPI";

const useGetFeedComment = (feedId: number) => {
  return useQuery({
    queryKey: ["feedComment", feedId],
    queryFn: () => getFeedComments(feedId),
    select: (data) => data.result,
  });
};

export default useGetFeedComment;
