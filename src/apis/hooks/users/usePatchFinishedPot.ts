import routes from "@constants/routes";
import { useMutation } from "@tanstack/react-query";
import { PatchPotCompleteParams } from "apis/types/pot";
import { patchFinishedPot } from "apis/userAPI";
import { useSnackbar } from "providers";
import { useNavigate } from "react-router-dom";

const usePatchFinishedPot = () => {
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: ({ potId, body }: PatchPotCompleteParams) =>
      patchFinishedPot(potId, body),

    onSuccess: () => {
      navigate(`${routes.pot.base}`);
      showSnackbar({
        message: "작성한 내용이 저장되었습니다.",
        severity: "success",
      });
    },
    onError: () => {
      showSnackbar({
        message: "저장에 실패했습니다.",
        severity: "success",
      });
    },
  });
};
export default usePatchFinishedPot;
