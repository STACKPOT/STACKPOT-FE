import { useMutation } from "@tanstack/react-query"
import { PatchPot } from "apis/potAPI"
import { PatchPotParams } from "apis/types/pot"

const usePatchPot = () => {
    return useMutation({
        mutationFn: ({ potId, body }: PatchPotParams) => PatchPot(potId, body),
    })
}
export default usePatchPot;