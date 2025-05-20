import { useQuery } from '@tanstack/react-query';
import { GetMyUser } from 'apis/userAPI';

const useGetMyProfile = (enabled: boolean = true) => {
	return useQuery({
		queryKey: ['myProfile'],
		queryFn: () => GetMyUser(),
		select: (data) => data.result,
		enabled,
	});
};

export default useGetMyProfile;
