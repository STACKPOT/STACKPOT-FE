import { useQuery } from '@tanstack/react-query';
import { GetMyUser, getUsersInfo } from 'apis/userAPI';
import { ApiResponse } from 'apis/types/response';
import { GetUserResponse } from 'apis/types/user';

const useGetProfile = (userId?: number) => {
  return useQuery({
    queryKey: ['profile', userId ?? 'me'],
    queryFn: () => (userId !== undefined ? getUsersInfo({ userId }) : GetMyUser()),
    select: (response: ApiResponse<GetUserResponse>) => response.result,
    staleTime: 0,
  });
};
export default useGetProfile;

