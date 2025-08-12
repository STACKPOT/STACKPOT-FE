import { useQuery } from '@tanstack/react-query';
import { getMyPageFeeds, getUsersMyPagesFeeds } from 'apis/userAPI';
import { ApiResponse } from 'apis/types/response';
import { Feeds, MyPageFeedsResponse } from 'apis/types/user';

export type ProfileFeedsView = {
  feeds: Feeds[];
  seriesModal: { label: string }[];
};

const useGetProfileFeeds = (userId?: number) => {
  return useQuery<ApiResponse<MyPageFeedsResponse>, Error, ProfileFeedsView>({
    queryKey: ['profile', 'feeds', userId ?? 'me'],
    queryFn: () => (userId ? getUsersMyPagesFeeds(userId) : getMyPageFeeds()),
    select: (response) => {
      const feeds = response.result?.feeds ?? [];
      const seriesNames = response.result?.seriesComments ?? [];
      const seriesModal = [{ label: '전체보기' }, ...seriesNames.map((name) => ({ label: name }))];
      return { feeds, seriesModal };
    },
    staleTime: 0,
  });
};

export default useGetProfileFeeds;

