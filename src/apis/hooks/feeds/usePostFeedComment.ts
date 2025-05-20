import { useMutation } from '@tanstack/react-query';
import { postFeedComment } from 'apis/feedAPI';

const usePostFeedComment = () => {
	return useMutation({
		mutationFn: (feedId: number) => postFeedComment(feedId),
	});
};
export default usePostFeedComment;
