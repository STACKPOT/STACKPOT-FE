import { apiGet, authApiGet } from "./apiUtils";
import { FeedDetailResponse, FeedResponse, GetFeedParams } from "./types/feed";

export const getFeeds = async ({
  category,
  sort,
  limit,
  cursor,
}: GetFeedParams) => {
  return apiGet<FeedResponse>("/feeds", { category, sort, limit, cursor });
};

export const getFeedDetail = async (feedId: number) => {
  return authApiGet<FeedDetailResponse>(`/feeds/${feedId}/detail`);
};
