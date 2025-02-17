import { useMutation, useQueryClient } from "@tanstack/react-query"
import { DeletePotApplications } from "apis/potAPI"

const useCancelApply = (potId: number) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (potId: number) => DeletePotApplications(potId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["pot", potId]
            })
        }
    })
}
export default useCancelApply;