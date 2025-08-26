import { useMutation } from "@tanstack/react-query";
import { postNickname } from "apis/userAPI";
import { useSnackbar } from "providers";

const usePostNickname = () => {
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (nickname: string) => postNickname(nickname),
    onSuccess: (data) => {
      if (data.result) {
        const { accessToken, refreshToken } = data.result;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        showSnackbar({
          message: "회원가입이 완료됐습니다.",
          severity: "success",
        });
      }
    },
  });
};

export default usePostNickname;
