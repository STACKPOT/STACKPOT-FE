import { useQuery } from '@tanstack/react-query';
import { getMyPageFeeds, getUsersMyPagesFeeds } from 'apis/userAPI';
import { ApiResponse } from 'apis/types/response';
import { Feeds, MyPageFeedsResponse } from 'apis/types/user';

export type ProfileFeedsView = {
  feeds: Feeds[];
  seriesComments: { comments: string }[];
};

const useGetProfileFeeds = (userId?: number) => {
  return useQuery<ApiResponse<MyPageFeedsResponse>, Error, ProfileFeedsView>({
    queryKey: ['profile', 'feeds', userId === undefined ? 'me' : userId],
    queryFn: () => (userId !== undefined ? getUsersMyPagesFeeds(userId) : getMyPageFeeds()),
    select: (response) => {
      const feeds = response.result?.feeds ?? [];
      const seriesNames = response.result?.seriesComments ?? [];
      const seriesComments = [{ comments: '전체보기' }, ...seriesNames.map((name) => ({ comments: name }))];
      return {
        feeds: [...feeds], // 깊은 복사
        seriesComments: [...seriesComments]
      }
    },
    staleTime: 0,
  });
};

export default useGetProfileFeeds;

