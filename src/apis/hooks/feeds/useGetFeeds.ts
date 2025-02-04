import { useQuery } from "@tanstack/react-query";
import { getFeeds } from "apis/feedAPI";
import { GetFeedParams } from "apis/types/feed";

const useGetFeeds = ({ category, sort, limit, cursor }: GetFeedParams) => {
  return useQuery({
    queryKey: ["feeds", category, sort, cursor],
    queryFn: () => getFeeds({ category, sort, limit, cursor }),
    select: (data) => data.result,
  });
};

export default useGetFeeds;
