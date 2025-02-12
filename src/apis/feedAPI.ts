import { apiGet, authApiPost } from "./apiUtils";
import {
  FeedResponse,
  GetFeedParams,
  PostFeedParams,
  PostFeedResponse,
} from "./types/feed";

export const getFeeds = async ({
  category,
  sort,
  limit,
  cursor,
}: GetFeedParams) => {
  return apiGet<FeedResponse>("/feeds", { category, sort, limit, cursor });
};

export const postFeed = async ({
  title,
  content,
  category,
}: PostFeedParams) => {
  return authApiPost<PostFeedResponse>("/feeds", { title, content, category });
};
