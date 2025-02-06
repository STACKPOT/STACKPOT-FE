import { useQuery } from "@tanstack/react-query"
import { GetPotApplicants } from "apis/potAPI"

const useGetPotApplicants = (potId: number) => {
    return useQuery({
        queryKey: ["applicants", potId],
        queryFn: () => GetPotApplicants(potId),
        select: (data) => data.result,
    });
};
export default useGetPotApplicants;