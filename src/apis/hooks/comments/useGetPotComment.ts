import { useQuery } from "@tanstack/react-query";
import { GetPotComments } from "apis/commentAPI";

const useGetPotComment = (potId: number) => {
  return useQuery({
    queryKey: ["potComment", potId],
    queryFn: () => GetPotComments(potId),
    select: (data) => data.result,
  });
};

export default useGetPotComment;
