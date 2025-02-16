import { useQuery } from "@tanstack/react-query"
import { GetPotsApply } from "apis/potAPI"

const useGetPotsApply = () => {
    return useQuery({
        queryKey: ["pot-apply"],
        queryFn: () => GetPotsApply(),
        select: (data) => data.result,
    });
};
export default useGetPotsApply;