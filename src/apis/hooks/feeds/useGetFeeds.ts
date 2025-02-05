import { useInfiniteQuery } from "@tanstack/react-query";
import { getFeeds } from "apis/feedAPI";
import { GetFeedParams } from "apis/types/feed";

const useGetFeeds = ({ category, sort, limit, cursor }: GetFeedParams) => {
  return useInfiniteQuery({
    queryKey: ["feeds", category, sort],
    queryFn: ({ pageParam = cursor }) =>
      getFeeds({ category, sort, limit, cursor: pageParam }),
    getNextPageParam: (lastPage) => lastPage.result?.nextCursor ?? null,
    initialPageParam: cursor ?? null,
  });
};

export default useGetFeeds;
