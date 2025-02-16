import { useMutation } from "@tanstack/react-query"
import { PostPot } from "apis/potAPI"
import { PostPotParams } from "apis/types/pot"

const useCreatePot = () => {
    return useMutation({
        mutationFn: (params: PostPotParams) => PostPot(params),
    })
}
export default useCreatePot;