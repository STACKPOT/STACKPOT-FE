import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postFeedSeries } from "apis/feedAPI";
import { PostFeedSeriesParams } from "apis/types/feed";
import { useSnackbar } from "providers";

const usePostFeedSeries = () => {
  const { showSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: PostFeedSeriesParams) => postFeedSeries(body),
    onSuccess: () => {
      showSnackbar({
        message: "작성한 내용이 저장되었습니다.",
        severity: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["series"],
      });
      queryClient.invalidateQueries({
        queryKey: ["feeds"],
      });
      queryClient.invalidateQueries({
        queryKey: ["profile", "feeds"],
        exact: false,
      });
    },
    onError: () => {
      showSnackbar({
        message: "피드 저장에 실패했습니다.",
        severity: "error",
      });
    },
  });
};
export default usePostFeedSeries;
