import { useQuery } from "@tanstack/react-query";
import { GetPots } from "apis/potAPI";
import { GetPotsParams } from "apis/types/pot";

const useGetPots = ({
  page,
  size,
  recruitmentRole,
  onlyMine,
}: GetPotsParams) => {
  return useQuery({
    queryKey: ["pots", page, recruitmentRole, onlyMine],
    queryFn: () => GetPots({ page, size, recruitmentRole, onlyMine }),
    select: (data) => data.result,
  });
};

export default useGetPots;
