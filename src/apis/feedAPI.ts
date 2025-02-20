import { useParams } from "react-router-dom";
import {
  apiGet,
  authApiGet,
  authApiPost,
  authApiPatch,
  authApiDelete,
} from "./apiUtils";
import {
  FeedPatch,
  FeedResponse,
  GetFeedDetailResponse,
  GetFeedParams,
  PatchFeedResponse,
  PostFeedParams,
  PostFeedResponse,
} from "./types/feed";

export const getFeeds = async ({
  category,
  sort,
  limit,
  cursor,
}: GetFeedParams) => {
  return authApiGet<FeedResponse>("/feeds", { category, sort, limit, cursor });
};

export const postFeed = async ({
  title,
  content,
  category,
}: PostFeedParams) => {
  return authApiPost<PostFeedResponse>("/feeds", { title, content, category });
};

export const patchFeed = async (feedId: number, body: FeedPatch) => {
  return authApiPatch<PatchFeedResponse>(`/feeds/${feedId}`, body);
};

export const getFeedDetails = async (feedId: number) => {
  return authApiGet<GetFeedDetailResponse>(`/feeds/${feedId}/detail`);
};

export const postFeedLike = async (feedId: number) => {
  return authApiPost<Record<string, string>>(`/feeds/${feedId}/like`);
};

export const DeleteFeed = async (feedId: number) => {
  return authApiDelete(`/feeds/${feedId}`);
};
