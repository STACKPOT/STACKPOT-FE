import { useMutation } from "@tanstack/react-query"
import { postFeedLike } from "apis/feedAPI"

const usePostFeedLike = () => {
    return useMutation({
        mutationFn: (feedId: number) => postFeedLike(feedId),
    });
};
export default usePostFeedLike;