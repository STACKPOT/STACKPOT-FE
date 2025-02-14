import routes from "@constants/routes";
import { useMutation } from "@tanstack/react-query";
import { getKakaoLogIn } from "apis/userAPI";
import { useNavigate } from "react-router-dom";

const useGetSignIn = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (code: string) => getKakaoLogIn(code),
    onSuccess: (data) => {
      if (data.result) {
        const { accessToken, refreshToken } = data.result.tokenServiceResponse;
        const role = data.result.role ?? null;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("role", role ?? "DEFAULT");
        if (data.result.isNewUser) {
          navigate(routes.signUp);
        } else {
          navigate(routes.home);
        }
      }
    },
  });
};

export default useGetSignIn;
