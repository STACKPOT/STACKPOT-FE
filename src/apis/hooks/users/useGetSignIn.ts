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
        const { accessToken, refreshToken, role } =
          data.result.tokenServiceResponse;
        sessionStorage.setItem("accessToken", accessToken);
        sessionStorage.setItem("refreshToken", refreshToken);
        sessionStorage.setItem("role", role);
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
