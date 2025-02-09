import { useQuery } from "@tanstack/react-query"
import { GetPotDetail } from "apis/potAPI"

const useGetPotDetail = (potId: number) => {
    return useQuery({
        queryKey: ["pot", potId],
        queryFn: () => GetPotDetail(potId),
        select: (data) => data.result,
    });
};
export default useGetPotDetail;