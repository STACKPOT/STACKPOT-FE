import { useMutation } from "@tanstack/react-query"
import { ApplyPot } from "apis/potAPI"
import { ApplyPotParams } from "apis/types/pot"

const useApplyPot = () => {
    return useMutation({
        mutationFn: ({ potId, body }: ApplyPotParams) => ApplyPot(potId, body),
    })
}
export default useApplyPot;