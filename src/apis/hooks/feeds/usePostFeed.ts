import { useMutation } from "@tanstack/react-query";
import { postFeed } from "apis/feedAPI";
import { PostFeedParams } from "apis/types/feed";
import { useSnackbar } from "providers";

const usePostFeed = () => {
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (params: PostFeedParams) => postFeed(params),
    onSuccess: () => {
      showSnackbar({
        message: "피드가 성공적으로 업로드되었습니다!",
        severity: "success",
      });
    },
    onError: () => {
      showSnackbar({
        message: "피드 업로드에 실패했습니다.",
        severity: "error",
      });
    },
  });
};

export default usePostFeed;
