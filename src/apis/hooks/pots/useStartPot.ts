import { useMutation } from "@tanstack/react-query"
import { StartPot } from "apis/potAPI"
import { StartPotParams } from "apis/types/pot"

const useStartPot = () => {
    return useMutation({
        mutationFn: ({ potId, body }: StartPotParams) => StartPot(potId, body),
    })
}
export default useStartPot;