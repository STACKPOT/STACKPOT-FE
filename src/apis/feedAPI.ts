import {
  authApiGet,
  authApiPost,
  authApiPatch,
  authApiDelete,
} from "./axios/apiUtils";
import {
  GetFeedParams,
  FeedResponse,
  PostFeedParams,
  PostFeedResponse,
  FeedPatch,
  PatchFeedResponse,
  GetFeedCommentsResponse,
  PostFeedCommentParams,
  PostFeedCommentResponse,
  GetFeedDetailResponse,
  PostFeedCommentReplyResponse,
  PostFeedCommentReplyParams,
  PatchFeedCommentParams,
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
export const postFeedSave = async (feedId: number) => {
  return authApiPost<Record<string, string>>(`/feeds/${feedId}/save`);
};

export const DeleteFeed = async (feedId: number) => {
  return authApiDelete(`/feeds/${feedId}`);
};

export const getFeedComments = async (feedId: number) => {
  return authApiGet<GetFeedCommentsResponse[]>(`/feed-comments`, { feedId });
};

export const postFeedComment = async ({
  feedId,
  comment,
}: PostFeedCommentParams) => {
  return authApiPost<PostFeedCommentResponse>(`/feed-comments`, {
    feedId,
    comment,
  });
};

export const postFeedCommentReply = async ({
  feedId,
  comment,
  parentCommentId,
}: PostFeedCommentReplyParams) => {
  return authApiPost<PostFeedCommentReplyResponse>(
    `/feed-comments/${parentCommentId}/replies`,
    {
      feedId,
      comment,
    }
  );
};

export const patchFeedComment = async ({
  commentId,
  comment,
}: PatchFeedCommentParams) => {
  return authApiPatch(`/feed-comments/${commentId}`, {
    comment,
  });
};

export const deleteFeedComment = async (commentId: number) => {
  return authApiDelete(`/feed-comments/${commentId}`);
};
