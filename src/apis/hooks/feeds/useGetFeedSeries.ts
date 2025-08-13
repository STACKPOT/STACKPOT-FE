import { useQuery } from "@tanstack/react-query";
import { getFeedSeries } from "apis/feedAPI";

const useGetFeedSeries = () => {
  return useQuery({
    queryKey: ["series"],
    queryFn: () => getFeedSeries(),
    select: (data) => data.result,
  });
};
export default useGetFeedSeries;
