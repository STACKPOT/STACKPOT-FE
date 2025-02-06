import { useMutation } from "@tanstack/react-query"
import { CancelApply } from "apis/potAPI"

const useCancelApply = () => {
    return useMutation({
        mutationFn: (potId: number) => CancelApply(potId),
    })
}
export default useCancelApply;