import routes from "@constants/routes";
import { useMutation } from "@tanstack/react-query";
import { getKakaoLogIn } from "apis/userAPI";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "stores/useAuthStore";

const useGetSignIn = () => {
  const navigate = useNavigate();
  const setRole = useAuthStore((state) => state.setRole);

  return useMutation({
    mutationFn: (code: string) => getKakaoLogIn(code),
    onSuccess: (data) => {
      if (data.result) {
        const { accessToken, refreshToken } = data.result.tokenServiceResponse;
        const role = data.result.role ?? null;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("role", role ?? "UNKNOWN");
        setRole(role ?? "UNKNOWN");
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
