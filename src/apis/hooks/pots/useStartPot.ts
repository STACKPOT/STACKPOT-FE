import { useMutation, useQueryClient } from "@tanstack/react-query"
import { PostPotMembers } from "apis/potAPI"
import { PostPotMembersParams } from "apis/types/pot"

const useStartPot = (potId:number) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ potId, body }: PostPotMembersParams) => PostPotMembers(potId, body),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["pot", potId]
            })
        }
    })
}
export default useStartPot;