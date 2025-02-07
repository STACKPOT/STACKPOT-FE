import { useQuery } from "@tanstack/react-query"
import { GetPotApplications } from "apis/potAPI"

const useGetPotApplicants = (potId: number) => {
    return useQuery({
        queryKey: ["applicants", potId],
        queryFn: () => GetPotApplications(potId),
        select: (data) => data.result,
    });
};
export default useGetPotApplicants;