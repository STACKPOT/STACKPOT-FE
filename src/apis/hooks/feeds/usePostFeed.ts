import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postFeed } from "apis/feedAPI";
import { PostFeedParams } from "apis/types/feed";
import { useNavigate } from "react-router-dom";
import { Role } from "types/role";

const usePostFeed = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (params: PostFeedParams) => postFeed(params),
    onSuccess: (data) => {
      if (data.result) {
        const { feedId } = data.result;
      } else {
      }
    },
  });
};

export default usePostFeed;
