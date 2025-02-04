import { useMutation } from "@tanstack/react-query";
import { postSignInPayload } from "apis/types/user";
import { postSignIn } from "apis/userAPI";

const usePostSignIn = () => {
  return useMutation({
    mutationFn: (data: postSignInPayload) => postSignIn(data),
  });
};

export default usePostSignIn;
