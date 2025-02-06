import routes from "@constants/routes";
import { useMutation } from "@tanstack/react-query";
import { postNickname } from "apis/userAPI";
import { useNavigate } from "react-router-dom";

const usePostNickname = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (nickname: string) => postNickname(nickname),
    onSuccess: () => {
      navigate(routes.home);
    },
  });
};

export default usePostNickname;
