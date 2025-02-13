import { useMutation } from "@tanstack/react-query"
import { DeletePot } from "apis/potAPI"

const useDeletePot = () => {
    return useMutation({
        mutationFn: (potId: number) => DeletePot(potId),
    })
};
export default useDeletePot;