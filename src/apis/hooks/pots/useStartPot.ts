import { useMutation } from "@tanstack/react-query"
import { PostPotMembers } from "apis/potAPI"
import { PostPotMembersParams } from "apis/types/pot"

const useStartPot = () => {
    return useMutation({
        mutationFn: ({ potId, body }: PostPotMembersParams) => PostPotMembers(potId, body),
    })
}
export default useStartPot;