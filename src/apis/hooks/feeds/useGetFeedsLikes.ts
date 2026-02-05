import { useQuery } from "@tanstack/react-query";
import { getFeedsLikes } from "apis/feedAPI";
const useGetFeedsLikes = (page: number, size: number) => {
  return useQuery({
    queryKey: ["feed-likes", page, size],
    queryFn: () => getFeedsLikes({ page, size }),
    select: (data) => data.result,
  });
};

export default useGetFeedsLikes;
