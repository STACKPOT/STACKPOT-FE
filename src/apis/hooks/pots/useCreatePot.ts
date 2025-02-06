import { useMutation } from "@tanstack/react-query"
import { CreatePot } from "apis/potAPI"
import { CreatePotParams } from "apis/types/pot"
import { useNavigate } from "react-router-dom"

const useCreatePot = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (params: CreatePotParams) => CreatePot(params),
        onSuccess: (data) => {
            if (data.result) {
                const { potId } = data.result;
                navigate(`/pot/${potId}`);
            } else {
            }
        }
    })
}
export default useCreatePot;