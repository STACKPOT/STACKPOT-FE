import { useQuery } from '@tanstack/react-query';
import { getMyPagePots, getUsersMyPagesPots } from 'apis/userAPI';
import { ApiResponse } from 'apis/types/response';
import { GetMyPagePotsParams, MyPagePotsResponse } from 'apis/types/user';

const useGetProfilePots = (potStatus: GetMyPagePotsParams['potStatus'], userId?: number) => {
  return useQuery<ApiResponse<MyPagePotsResponse>, Error, MyPagePotsResponse>({
    queryKey: ['profile', 'pots', userId ?? 'me', potStatus],
    queryFn: () => (userId !== undefined ? getUsersMyPagesPots(userId, potStatus) : getMyPagePots({ potStatus })),
    select: (response) => response.result ?? [],
    staleTime: 0,
  });
};

export default useGetProfilePots;

