import { useQuery } from "@tanstack/react-query";
import { getSavePots } from "apis/saveAPI";
const useGetSavePots = (page: number, size: number) => {
  return useQuery({
    queryKey: ["save-pots", page, size],
    queryFn: () => getSavePots({ page, size }),
    select: (data) => data.result,
  });
};

export default useGetSavePots;
