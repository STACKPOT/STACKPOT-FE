import routes from '@constants/routes';
import { useMutation } from '@tanstack/react-query';
import { postLogout } from 'apis/userAPI';
import { useSnackbar } from 'providers';

const usePostLogout = () => {
	const { showSnackbar } = useSnackbar();

	return useMutation({
		mutationFn: (refreshToken: string) => postLogout(refreshToken),
		onSuccess: () => {
			localStorage.removeItem('accessToken');
			localStorage.removeItem('refreshToken');
			localStorage.removeItem('role');

			window.location.href = routes.home;
			showSnackbar({
				message: '로그아웃이 완료됐습니다.',
				severity: 'success',
			});
		},
	});
};

export default usePostLogout;
