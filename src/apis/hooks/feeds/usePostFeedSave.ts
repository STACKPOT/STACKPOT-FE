import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postFeedSave } from "apis/feedAPI";
import { useSnackbar } from "providers";

const usePostFeedSave = () => {
	const queryClient = useQueryClient();
	const { showSnackbar } = useSnackbar();
	return useMutation({
		mutationFn: (feedId: number) => postFeedSave(feedId),
		onSuccess: (_, feedId) => {
			queryClient.invalidateQueries({
				queryKey: ["feeds"],
			});
			queryClient.invalidateQueries({
				queryKey: ["my-page"],
			});
			queryClient.invalidateQueries({
				queryKey: ['profile', 'feeds']
			});
			queryClient.invalidateQueries({
				queryKey: ["feedDetail", feedId]
			});
		},
		onError: () => {
			showSnackbar({
				message: "피드 저장에 실패했습니다.",
			});
		},
	});
};
export default usePostFeedSave;
