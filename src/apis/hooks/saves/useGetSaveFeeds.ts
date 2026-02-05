import { useQuery } from "@tanstack/react-query";
import { getSaveFeeds } from "apis/saveAPI";
const useGetSaveFeeds = (page: number, size: number) => {
  return useQuery({
    queryKey: ["save-feeds", page, size],
    queryFn: () => getSaveFeeds({ page, size }),
    select: (data) => data.result,
  });
};

export default useGetSaveFeeds;
