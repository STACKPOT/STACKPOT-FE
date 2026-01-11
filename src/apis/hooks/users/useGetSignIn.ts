import routes from "@constants/routes";
import { useMutation } from "@tanstack/react-query";
import { getGoogleLogIn, getKakaoLogIn, getNaverLogIn } from "apis/userAPI";
import { useNavigate } from "react-router-dom";

const useGetSignIn = (signInType: string | undefined) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (code: string) => {
      switch (signInType) {
        case "google":
          return getGoogleLogIn(code);
        case "kakao":
          return getKakaoLogIn(code);
        case "naver":
          return getNaverLogIn(code);
        default:
          throw new Error(`Invalid login type: ${signInType}`);
      }
    },
    onSuccess: (data) => {
      if (data.result) {
        const { accessToken, refreshToken } = data.result.tokenServiceResponse;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
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
