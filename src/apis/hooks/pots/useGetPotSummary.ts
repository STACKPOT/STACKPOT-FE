import { useQuery } from "@tanstack/react-query"
import { GetPotSummary } from "apis/potAPI"

const useGetPotSummary = (potId: number) => {
    return useQuery({
        queryKey: ["summary", potId],
        queryFn: () => GetPotSummary(potId),
        select: (data) => data.result,
        enabled: false,
    });
};
export default useGetPotSummary;