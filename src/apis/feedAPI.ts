import { apiGet } from "./apiUtils";
import { FeedResponse, GetFeedParams } from "./types/feed";

export const getFeeds = async ({
  category,
  sort,
  limit,
  cursor,
}: GetFeedParams) => {
  return apiGet<FeedResponse>("/feeds", { category, sort, limit, cursor });
};
