import routes from "@constants/routes";
import { useMutation } from "@tanstack/react-query";
import { postLogout } from "apis/userAPI";
import { useNavigate } from "react-router-dom";

const usePostLogout = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (refreshToken: string) => postLogout(refreshToken),
    onSuccess: () => {
      navigate(routes.home);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("role");
    },
  });
};

export default usePostLogout;
