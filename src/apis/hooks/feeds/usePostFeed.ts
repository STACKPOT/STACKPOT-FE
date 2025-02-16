import { useMutation } from "@tanstack/react-query";
import { postFeed } from "apis/feedAPI";
import { PostFeedParams } from "apis/types/feed";

const usePostFeed = () => {
  return useMutation({
    mutationFn: (params: PostFeedParams) => postFeed(params),
  });
};

export default usePostFeed;
