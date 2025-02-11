import { useQuery } from "@tanstack/react-query";
import { GetPots } from "apis/potAPI";
import { GetPotsParams } from "apis/types/pot";

const useGetPots = ({ page, size, recruitmentRole }: GetPotsParams) => {
  return useQuery({
    queryKey: ["pots", page, recruitmentRole],
    queryFn: () => GetPots({ page, size, recruitmentRole }),
    select: (data) => data.result,
  });
};

export default useGetPots;
