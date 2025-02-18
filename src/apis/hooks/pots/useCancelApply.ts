import { useMutation, useQueryClient } from "@tanstack/react-query"
import { DeletePotApplications } from "apis/potAPI"

const useCancelApply = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (potId: number) => DeletePotApplications(potId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["potDetail"]
            })
        }
    })
}
export default useCancelApply;