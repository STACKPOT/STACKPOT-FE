import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchMyPotRename } from "apis/myPotAPI";
import { RenameParams } from "apis/types/myPot";
import { useSnackbar } from "providers";

export const usePatchRename = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: ({ potId, potName }: RenameParams) =>
      patchMyPotRename({ potId, potName }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      showSnackbar({
        message: "팟 이름이 수정되었습니다.",
        severity: "success",
      });
    },
    onError: () => {
      showSnackbar({
        message: "팟 이름 수정에 실패했습니다.",
        severity: "error",
      });
    },
  });
};
