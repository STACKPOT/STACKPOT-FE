import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostPotApplications } from "apis/potAPI";
import { PostPotApplicationParams } from "apis/types/pot";
import { useSnackbar } from "providers";

const useApplyPot = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: ({ potId, body }: PostPotApplicationParams) =>
      PostPotApplications(potId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["potDetail"],
      });
    },
    onError: () => {
      showSnackbar({
        message: "지원에 실패했습니다",
        severity: "error",
      });
    },
  });
};
export default useApplyPot;
