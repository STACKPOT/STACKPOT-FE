import routes from "@constants/routes";
import { useMutation } from "@tanstack/react-query";
import { postNickname } from "apis/userAPI";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "providers";

const usePostLogout = () => {
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (refreshToken: string) => postNickname(refreshToken),
    onSuccess: () => {
      navigate(routes.home);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("role");
      showSnackbar({
        message: "로그아웃이 완료됐습니다.",
        severity: "success",
      });
    },
  });
};

export default usePostLogout;
