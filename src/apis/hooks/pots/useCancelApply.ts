import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeletePotApplications } from "apis/potAPI";
import { useSnackbar } from "providers";

const useCancelApply = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (potId: number) => DeletePotApplications(potId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["potDetail"],
      });
      queryClient.invalidateQueries({
        queryKey: ["pot-apply"],
      });
    },
    onError: () => {
      showSnackbar({
        message: "지원 취소에 실패했습니다",
        severity: "error",
      });
    },
  });
};
export default useCancelApply;
