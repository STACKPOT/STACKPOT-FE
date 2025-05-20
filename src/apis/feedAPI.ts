import { authApiGet, authApiPost, authApiPatch, authApiDelete } from './axios/apiUtils';
import { GetFeedParams, FeedResponse, PostFeedParams, PostFeedResponse, FeedPatch, PatchFeedResponse, GetFeedDetailResponse } from './types/feed';

export const getFeeds = async ({ category, sort, limit, cursor }: GetFeedParams) => {
	return authApiGet<FeedResponse>('/feeds', { category, sort, limit, cursor });
};

export const postFeed = async ({ title, content, category }: PostFeedParams) => {
	return authApiPost<PostFeedResponse>('/feeds', { title, content, category });
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
export const postFeedSave = async (feedId: number) => {
	return authApiPost<Record<string, string>>(`/feeds/${feedId}/save`);
};
export const postFeedComment = async (feedId: number) => {
	return authApiPost<Record<string, string>>(`/feeds/${feedId}/comment`);
};

export const DeleteFeed = async (feedId: number) => {
	return authApiDelete(`/feeds/${feedId}`);
};
