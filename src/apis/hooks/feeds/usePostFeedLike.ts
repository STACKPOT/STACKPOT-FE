import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postFeedLike } from "apis/feedAPI";
import { useSnackbar } from "providers";

const usePostFeedLike = () => {
  const queryCient = useQueryClient();
  const { showSnackbar } = useSnackbar();
  return useMutation({
    mutationFn: (feedId: number) => postFeedLike(feedId),
    onSuccess: (_, variables) => {
      queryCient.invalidateQueries({
        queryKey: ["feedDetail", variables],
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
