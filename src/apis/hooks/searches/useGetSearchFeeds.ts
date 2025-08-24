import { useInfiniteQuery } from "@tanstack/react-query";
import { getSearchFeedsUsers, getSearchMyFeeds } from "apis/searchAPI";
import { GetFeedsSearchParams } from "apis/types/search";

const useGetSearchFeeds = ({ keyword, nextCursor, size = 10, userId, }: GetFeedsSearchParams) => {
  return useInfiniteQuery({
    queryKey: ["my-page", "search", "users", userId, keyword, size],
    queryFn: ({ pageParam = nextCursor }) => (userId !== undefined ? getSearchFeedsUsers({ keyword, nextCursor: pageParam, size, userId }) : getSearchMyFeeds({ keyword, nextCursor: pageParam, size })),
    getNextPageParam: (lastPage) => lastPage.result?.nextCursor ?? undefined,
    initialPageParam: nextCursor,
    enabled: keyword.trim().length > 0,
  });
};
export default useGetSearchFeeds;
