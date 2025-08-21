import { useInfiniteQuery } from "@tanstack/react-query";
import { getSearchMyFeeds } from "apis/searchAPI";
import { GetMyFeedsSearchParams } from "apis/types/search";

const useGetSearchMyFeeds = ({ keyword, nextCursor, size = 10 }: GetMyFeedsSearchParams) => {
  return useInfiniteQuery({
    queryKey: ["my-page", "search", keyword, size],
    queryFn: ({ pageParam = nextCursor }) => getSearchMyFeeds({ keyword, nextCursor: pageParam, size }),
    getNextPageParam: (lastPage) => lastPage.result?.nextCursor ?? null,
    initialPageParam: nextCursor,
  });
};
export default useGetSearchMyFeeds;
