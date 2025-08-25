import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchMyPotDelegate } from "apis/myPotAPI";
import { DelegateParams } from "apis/types/myPot";
import { useSnackbar } from "providers";

export const usePatchDelegate = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: ({ potId, memberId }: DelegateParams) =>
      patchMyPotDelegate({ potId, memberId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      queryClient.invalidateQueries({ queryKey: ["potOwner"] });
      showSnackbar({
        message: "권한 위임이 완료되었습니다.",
        severity: "success",
      });
    },
    onError: () => {
      showSnackbar({
        message: "권한 위임에 실패했습니다.",
        severity: "error",
      });
    },
  });
};
