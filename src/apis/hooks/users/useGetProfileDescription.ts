import { useQuery } from '@tanstack/react-query';
import { getMyPageDescription, getUsersMyPagesDescription } from 'apis/userAPI';
import { ApiResponse } from 'apis/types/response';

const useGetProfileDescription = (userId?: number) => {
  return useQuery<ApiResponse<any>, Error, string>({
    queryKey: ['profile', 'description', userId ?? 'me'],
    queryFn: () => (userId !== undefined ? getUsersMyPagesDescription(userId) : getMyPageDescription()),
    select: (response) => response.result?.userDescription ?? '',
    staleTime: 0,
  });
};

export default useGetProfileDescription;

