import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postFeedSave } from "apis/feedAPI";
import { useSnackbar } from "providers";

const usePostFeedSave = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();
  return useMutation({
    mutationFn: (feedId: number) => postFeedSave(feedId),
    onSuccess: (_, feedId) => {
      queryClient.invalidateQueries({
        queryKey: ["feeds"],
      });
      queryClient.invalidateQueries({
        queryKey: ["my-page"],
      });
      queryClient.invalidateQueries({
        queryKey: ["profile", "feeds"],
      });
      queryClient.invalidateQueries({
        queryKey: ["feedDetail", feedId],
      });
      queryClient.invalidateQueries({
        queryKey: ["my-page", "search", "users"],
        exact: false, // prefix match으로 userId·keyword·size 포함 모든 검색 피드 무효화
      });
    },
    onError: () => {
      showSnackbar({
        message: "피드 저장에 실패했습니다.",
      });
    },
  });
};
export default usePostFeedSave;
