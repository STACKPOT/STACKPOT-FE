import { useQuery } from '@tanstack/react-query';
import { getMyPagePots, getUsersMyPagesPots } from 'apis/userAPI';
import { ApiResponse } from 'apis/types/response';
import { GetMyPagePotsParams, MyPagePotsResponse } from 'apis/types/user';

const useGetProfilePots = (status: GetMyPagePotsParams['status'], userId?: number) => {
  return useQuery<ApiResponse<MyPagePotsResponse>, Error, MyPagePotsResponse>({
    queryKey: ['profile', 'pots', userId ?? 'me', status],
    queryFn: () => (userId ? getUsersMyPagesPots(userId) : getMyPagePots({ status })),
    select: (response) => response.result ?? [],
    staleTime: 0,
  });
};

export default useGetProfilePots;

