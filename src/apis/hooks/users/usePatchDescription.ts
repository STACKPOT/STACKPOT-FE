
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PatchDescriptionBody } from "apis/types/pot";
import { patchDescription } from "apis/userAPI";
import { useSnackbar } from "providers";

const usePatchDescription = () => {
  const { showSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ userDescription }: PatchDescriptionBody) =>
      patchDescription({ userDescription }),

    onSuccess: () => {
      showSnackbar({
        message: "작성한 내용이 저장되었습니다.",
        severity: "success",
      });

      queryClient.invalidateQueries({
        queryKey: ['profile', 'description', 'me'],
      });
    },
    onError: () => {
      showSnackbar({
        message: "저장에 실패했습니다.",
        severity: "error",
      });
    },
  });
};
export default usePatchDescription;
