import { useQuery } from "@tanstack/react-query";
import { GetPots } from "apis/potAPI";
import { GetPotsParams } from "apis/types/pot";

const useGetPots = ({
  page,
  size,
  recruitmentRoles,
  onlyMine,
}: GetPotsParams) => {
  return useQuery({
    queryKey: ["pots", page, recruitmentRoles, onlyMine],
    queryFn: () => GetPots({ page, size, recruitmentRoles, onlyMine }),
    select: (data) => data.result,
  });
};

export default useGetPots;
