import { useInfiniteQuery } from "@tanstack/react-query";
import { getSearchFeedsUsers } from "apis/searchAPI";
import { GetUserFeedsSearchParams } from "apis/types/search";

const useGetSearchMyFeeds = ({ keyword, nextCursor, size = 10, userId }: GetUserFeedsSearchParams) => {
  return useInfiniteQuery({
    queryKey: ["my-page", "search", keyword, size, userId],
    queryFn: ({ pageParam = nextCursor }) => getSearchFeedsUsers({ keyword, nextCursor: pageParam, size, userId }),
    getNextPageParam: (lastPage) => lastPage.result?.nextCursor ?? null,
    initialPageParam: nextCursor
  });
};
export default useGetSearchMyFeeds;
