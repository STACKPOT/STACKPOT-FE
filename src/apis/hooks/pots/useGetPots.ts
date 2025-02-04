import { useQuery } from "@tanstack/react-query";
import { GetPots } from "apis/potAPI";
import { GetPotsParams } from "apis/types/pot";

const useGetPots = ({ page, size }: GetPotsParams) => {
  return useQuery({
    queryKey: ["pots", page],
    queryFn: () => GetPots({ page, size }),
    select: (data) => data.result,
  });
};

export default useGetPots;
