import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteFeed } from "apis/feedAPI";
import { useSnackbar } from "providers";

const useDeleteFeed = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (feedId: number) => DeleteFeed(feedId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mypage"] });
      showSnackbar({
        message: "피드가 삭제되었습니다.",
        severity: "success",
      });
    },
    onError: () => {
      showSnackbar({
        message: "피드 삭제에 실패했습니다.",
        severity: "error",
      });
    },
  });
};
export default useDeleteFeed;
