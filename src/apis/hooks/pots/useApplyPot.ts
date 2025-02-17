import { useMutation, useQueryClient } from "@tanstack/react-query"
import { PostPotApplications } from "apis/potAPI"
import { PostPotApplicationParams } from "apis/types/pot"

const useApplyPot = (potId: number) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ potId, body }: PostPotApplicationParams) => PostPotApplications(potId, body),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["pot", potId]
            })
        }
    })
}
export default useApplyPot;