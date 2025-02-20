import routes from "@constants/routes";
import { useMutation } from "@tanstack/react-query";
import { PostPot } from "apis/potAPI";
import { PostPotParams } from "apis/types/pot";
import { useSnackbar } from "providers";
import { useNavigate } from "react-router-dom";

const useCreatePot = () => {
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (params: PostPotParams) => PostPot(params),
    onSuccess: (response) => {
      navigate(`${routes.pot.base}/${response.result?.potId}`);
      showSnackbar({
        message: "팟이 성공적으로 업로드되었습니다!",
        severity: "success",
      });
    },
    onError: () => {
      showSnackbar({
        message: "팟 업로드에 실패했습니다.",
        severity: "error",
      });
    },
  });
};
export default useCreatePot;
