import { useMutation } from "@tanstack/react-query";
import { DeleteFeed } from "apis/feedAPI";

const useDeleteFeed = () => {
  return useMutation({
    mutationFn: (feedId: number) => DeleteFeed(feedId),
  });
};
export default useDeleteFeed;
