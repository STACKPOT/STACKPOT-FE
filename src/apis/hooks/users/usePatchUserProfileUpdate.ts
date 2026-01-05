import { useMutation } from "@tanstack/react-query"
import { PatchUserProfileUpdateParams } from "apis/types/user"
import { patchUserProfileUpdate } from "apis/userAPI"

const usePatchUserProfileUpdate = () => {
    return useMutation({
        mutationFn: (data: PatchUserProfileUpdateParams) => patchUserProfileUpdate(data),

    })
}
export default usePatchUserProfileUpdate;