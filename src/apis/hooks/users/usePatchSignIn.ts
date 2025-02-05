import { useMutation } from "@tanstack/react-query";
import { postSignInPayload } from "apis/types/user";
import { patchSignIn } from "apis/userAPI";

const usePatchSignIn = () => {
  return useMutation({
    mutationFn: (data: postSignInPayload) => patchSignIn(data),
  });
};

export default usePatchSignIn;
