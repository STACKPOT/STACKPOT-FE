import { useQuery } from "@tanstack/react-query"
import { GetMyUser } from "apis/userAPI"

const useGetMyProfile = () => {
    return useQuery({
        queryKey: ["myProfile"],
        queryFn: () => GetMyUser(),
        select: (data) => data.result,
    })
}
export default useGetMyProfile;