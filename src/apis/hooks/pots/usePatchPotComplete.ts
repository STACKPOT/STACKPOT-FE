import { useMutation } from "@tanstack/react-query"
import { PatchPotComplete } from "apis/potAPI"
import { PatchPotCompleteParams } from "apis/types/pot"

const usePatchPotComplete = () => {
    return useMutation({
        mutationFn: ({ potId, body }: PatchPotCompleteParams) => PatchPotComplete(potId, body)
    })
};
export default usePatchPotComplete;