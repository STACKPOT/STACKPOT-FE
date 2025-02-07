import { useMutation } from "@tanstack/react-query"
import { PostPotApplications } from "apis/potAPI"
import { PostPotApplicationParams } from "apis/types/pot"

const useApplyPot = () => {
    return useMutation({
        mutationFn: ({ potId, body }: PostPotApplicationParams) => PostPotApplications(potId, body),
    })
}
export default useApplyPot;