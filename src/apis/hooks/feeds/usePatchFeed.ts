import { useMutation } from "@tanstack/react-query";
import { patchFeed } from "apis/feedAPI";
import { PatchFeedParams } from "apis/types/feed";

const usePatchFeed = () => {
  return useMutation({
    mutationFn: ({ feedId, body }: PatchFeedParams) => patchFeed(feedId, body),
  });
};

export default usePatchFeed;
