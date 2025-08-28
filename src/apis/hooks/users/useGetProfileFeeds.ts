import { useInfiniteQuery } from '@tanstack/react-query';
import { getMyPageFeeds, getUsersMyPagesFeeds } from 'apis/userAPI';
import { Feeds, GetFeedsParams } from 'apis/types/user';

export type ProfileFeedsView = {
  feeds: Feeds[];
  seriesComments: { comments: string }[];
};

const useGetProfileFeeds = ({ nextCursor, size = 10, userId, seriesId }: GetFeedsParams) => {
  return useInfiniteQuery({
    queryKey: ['profile', 'feeds', userId === undefined ? 'me' : userId, size, seriesId],
    queryFn: ({ pageParam = nextCursor }) => (userId !== undefined ? getUsersMyPagesFeeds({ userId, nextCursor: pageParam, size, seriesId }) : getMyPageFeeds({ nextCursor: pageParam, size, seriesId })),
    getNextPageParam: (lastPage) => { return lastPage.result?.nextCursor ?? undefined },
    select: (data) => {
      const feeds = data.pages.flatMap((page) => page.result?.feeds ?? []);
      const seriesNames = data.pages[0].result?.seriesComments ?? [];
      const seriesComments = [
        { comments: '전체보기' },
        ...seriesNames.map((name) => ({ comments: name }))
      ];
      return {
        feeds,
        seriesComments
      };
    },
    staleTime: 0,
    initialPageParam: nextCursor,
  });
};

export default useGetProfileFeeds;