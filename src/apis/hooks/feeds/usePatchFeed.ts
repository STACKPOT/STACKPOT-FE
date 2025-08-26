import routes from "@constants/routes";
import { useMutation } from "@tanstack/react-query";
import { patchFeed } from "apis/feedAPI";
import { PatchFeedParams } from "apis/types/feed";
import { useSnackbar } from "providers";
import { useNavigate } from "react-router-dom";

const usePatchFeed = () => {
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: ({ feedId, body }: PatchFeedParams) => patchFeed(feedId, body),
    onSuccess: (response) => {
      navigate(`${routes.feed.base}/${response.result?.feedId}`);
      showSnackbar({
        message: "작성한 내용이 저장되었습니다.",
        severity: "success",
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

export default usePatchFeed;
