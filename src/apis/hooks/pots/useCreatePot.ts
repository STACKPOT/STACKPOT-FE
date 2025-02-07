import { useMutation } from "@tanstack/react-query"
import { PostPot } from "apis/potAPI"
import { PostPotParams } from "apis/types/pot"
import { useNavigate } from "react-router-dom"

const useCreatePot = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (params: PostPotParams) => PostPot(params),
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