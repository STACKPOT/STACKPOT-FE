import { useMutation } from '@tanstack/react-query';
import { postFeedSave } from 'apis/feedAPI';

const usePostFeedSave = () => {
	return useMutation({
		mutationFn: (feedId: number) => postFeedSave(feedId),
	});
};
export default usePostFeedSave;
