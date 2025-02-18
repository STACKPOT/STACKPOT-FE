import routes from "@constants/routes";
import { useMutation } from "@tanstack/react-query";
import { postNickname } from "apis/userAPI";
import { useSnackbar } from "providers";
import { useNavigate } from "react-router-dom";

const usePostNickname = () => {
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (nickname: string) => postNickname(nickname),
    onSuccess: () => {
      navigate(routes.home);
      showSnackbar({
        message: "회원가입이 완료됐습니다.",
        severity: "success",
      });
    },
  });
};

export default usePostNickname;
