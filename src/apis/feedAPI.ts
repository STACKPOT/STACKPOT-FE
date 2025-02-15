import { apiGet, authApiGet, authApiPost } from "./apiUtils";
import { FeedDetailResponse, FeedResponse, GetFeedParams } from "./types/feed";

export const getFeeds = async ({
  category,
  sort,
  limit,
  cursor,
}: GetFeedParams) => {
  return authApiGet<FeedResponse>("/feeds", { category, sort, limit, cursor });
};

export const getFeedDetail = async (feedId: number) => {
  return authApiGet<FeedDetailResponse>(`/feeds/${feedId}/detail`);
};

export const postFeedLike = async (feedId: number) => {
  return authApiPost<Record<string, string>>(`/feeds/${feedId}/like`);
};