import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postFeedLike } from "apis/feedAPI";
import { useSnackbar } from "providers";

const usePostFeedLike = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();
  return useMutation({
    mutationFn: (feedId: number) => postFeedLike(feedId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["feeds"],
      });
      queryClient.invalidateQueries({
        queryKey: ["my-page"],
      });
      queryClient.invalidateQueries({
        queryKey: ['profile', 'feeds']
      });
    },
    onError: () => {
      showSnackbar({
        message: "피드 좋아요에 실패했습니다.",
      });
    },
  });
};
export default usePostFeedLike;
