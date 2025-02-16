import routes from "@constants/routes";
import { useMutation } from "@tanstack/react-query";
import { deleteUser } from "apis/userAPI";
import { useNavigate } from "react-router-dom";

const useDeleteUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (refreshToken: string) => deleteUser(refreshToken),
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("role");
      navigate(routes.home);
    },
  });
};

export default useDeleteUser;
