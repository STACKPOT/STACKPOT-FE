import routes from "@constants/routes";
import { useMutation } from "@tanstack/react-query";
import { GetKakaoLogIn } from "apis/userAPI";
import { useNavigate } from "react-router-dom";

const useGetSignIn = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (code: string) => GetKakaoLogIn(code),
    onSuccess: (data) => {
      if (data.result) {
        const { accessToken, refreshToken } = data.result.tokenServiceResponse;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        if (data.result.isNewUser) {
          navigate(routes.home);
        } else {
          navigate(routes.signUp);
        }
      }
    },
  });
};

export default useGetSignIn;
