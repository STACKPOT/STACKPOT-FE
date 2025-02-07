import { useQuery } from "@tanstack/react-query"
import { GetPotMembers } from "apis/potAPI"

const useGetPotMembers = (potId: number) => {
    return useQuery({
        queryKey: ["applicants", potId],
        queryFn: () => GetPotMembers(potId),
        select: (data) => data.result,
    });
};
export default useGetPotMembers;