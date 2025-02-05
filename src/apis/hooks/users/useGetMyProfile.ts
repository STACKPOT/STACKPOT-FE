import { useQuery } from "@tanstack/react-query"
import { getMyProfile } from "apis/userAPI"

const useGetMyProfile = () => {
    return useQuery({
        queryKey: ["myProfile"],
        queryFn: () => getMyProfile(),
        select: (data) => data.result,
    })
}
export default useGetMyProfile;