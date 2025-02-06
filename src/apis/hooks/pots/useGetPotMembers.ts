import { useQuery } from "@tanstack/react-query"
import { GetPotMemberInformation } from "apis/potAPI"

const useGetPotMembers = (potId: number) => {
    return useQuery({
        queryKey: ["applicants", potId],
        queryFn: () => GetPotMemberInformation(potId),
        select: (data) => data.result,
    });
};
export default useGetPotMembers;