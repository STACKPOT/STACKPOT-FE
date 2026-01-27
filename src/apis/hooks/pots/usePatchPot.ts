import routes from "@constants/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PatchPot } from "apis/potAPI";
import { PatchPotParams } from "apis/types/pot";
import { useSnackbar } from "providers";
import { useNavigate } from "react-router-dom";

const usePatchPot = () => {
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();
const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ potId, body }: PatchPotParams) => PatchPot(potId, body),    
    onSuccess: (response, variables) => {
      navigate(`${routes.pot.base}/${response.result?.potId}`);
      showSnackbar({
        message: "작성한 내용이 저장되었습니다.",
        severity: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["potDetail", variables.potId],
      });

    },
    onError: () => {
      showSnackbar({
        message: "팟 저장에 실패했습니다.",
        severity: "error",
      });
    },
  });
};
export default usePatchPot;


