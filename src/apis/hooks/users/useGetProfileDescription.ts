import { useQuery } from '@tanstack/react-query';
import { getMyPageDescription, getUsersMyPagesDescription } from 'apis/userAPI';
import { ApiResponse } from 'apis/types/response';
import { DescriptionResponse } from 'apis/types/user';

// 공용: 본인일 때는 /users/description, 타인일 때는 /users/:userId 에서 userIntroduction을 사용
const useGetProfileDescription = (userId?: number) => {
  return useQuery<ApiResponse<any>, Error, string>({
    queryKey: ['profile', 'description', userId ?? 'me'],
    queryFn: () => (userId ? getUsersMyPagesDescription(userId) : getMyPageDescription()),
    select: (response) => {
      const data = response.result as DescriptionResponse | undefined;
      return data?.userDescription ?? '';
    },
    staleTime: 0,
  });
};

export default useGetProfileDescription;

