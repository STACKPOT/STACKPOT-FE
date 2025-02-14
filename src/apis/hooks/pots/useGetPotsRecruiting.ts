import { useQuery } from "@tanstack/react-query"
import { GetPotsRecruiting } from "apis/potAPI"

const useGetPotsRecruiting = () => {
    return useQuery({
        queryKey: ["potsRecruiting"],
        queryFn: () => GetPotsRecruiting(),
        select: (data) => data.result,
    })
}
export default useGetPotsRecruiting;