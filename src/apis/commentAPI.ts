import {
  authApiDelete,
  authApiGet,
  authApiPatch,
  authApiPost,
} from "./axios/apiUtils";
import {
  GetFeedCommentsResponse,
  GetPotCommentResponse,
  PatchCommentParams,
  PostFeedCommentParams,
  PostFeedCommentReplyParams,
  PostFeedCommentReplyResponse,
  PostFeedCommentResponse,
  PostPotCommentParams,
  PostPotCommentReplyParams,
  PostPotCommentReplyResponse,
  PostPotCommentResponse,
} from "./types/comment";

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
}: PatchCommentParams) => {
  return authApiPatch(`/feed-comments/${commentId}`, {
    comment,
  });
};

export const deleteFeedComment = async (commentId: number) => {
  return authApiDelete(`/feed-comments/${commentId}`);
};

export const GetPotComments = async (potId: number) => {
  return authApiGet<GetPotCommentResponse[]>(`/pot-comments`, { potId });
};

export const postPotComment = async ({
  potId,
  comment,
}: PostPotCommentParams) => {
  return authApiPost<PostPotCommentResponse>(`/pot-comments`, {
    potId,
    comment,
  });
};

export const postPotCommentReply = async ({
  potId,
  comment,
  parentCommentId,
}: PostPotCommentReplyParams) => {
  return authApiPost<PostPotCommentReplyResponse>(
    `/pot-comments/${parentCommentId}/replies`,
    {
      potId,
      comment,
    }
  );
};

export const patchPotComment = async ({
  commentId,
  comment,
}: PatchCommentParams) => {
  return authApiPatch(`/pot-comments/${commentId}`, {
    comment,
  });
};

export const deletePotComment = async (commentId: number) => {
  return authApiDelete(`/pot-comments/${commentId}`);
};
