import { useMutation } from "@tanstack/react-query"
import { DeletePotApplications } from "apis/potAPI"

const useCancelApply = () => {
    return useMutation({
        mutationFn: (potId: number) => DeletePotApplications(potId),
    })
}
export default useCancelApply;