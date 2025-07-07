import { Role } from "types/role";

export interface GetFeedCommentsResponse extends CommentResponse {
  isFeedWriter: boolean;
}

export interface PostFeedCommentParams {
  feedId: number;
  comment: string;
}

export interface PostFeedCommentResponse {
  userId: number;
  userName: string;
  role: Role;
  isWriter: boolean;
  commentId: number;
  comment: string;
  createdAt: string;
}

export interface PostFeedCommentReplyParams {
  feedId: number;
  comment: string;
  parentCommentId: number;
}

export interface PostFeedCommentReplyResponse {
  userId: number;
  userName: string;
  role: Role;
  isWriter: boolean;
  commentId: number;
  comment: string;
  createdAt: string;
  parentCommentId: number;
}

export interface PatchCommentParams {
  commentId: number;
  comment: string;
}

export interface CommentResponse {
  userId: number;
  userName: string;
  role: Role;
  isCommentWriter: boolean;
  commentId: number;
  comment: string;
  parentCommentId: number;
  createdAt: string;
  children: CommentResponse[];
}

export interface GetPotCommentResponse extends CommentResponse {
  isPotWriter: boolean;
}

export interface PostPotCommentParams {
  potId: number;
  comment: string;
}

export interface PostPotCommentResponse {
  userId: number;
  userName: string;
  role: Role;
  isWriter: boolean;
  commentId: number;
  comment: string;
  createdAt: string;
}

export interface PostPotCommentReplyParams {
  potId: number;
  comment: string;
  parentCommentId: number;
}

export interface PostPotCommentReplyResponse {
  userId: number;
  userName: string;
  role: Role;
  isWriter: boolean;
  commentId: number;
  comment: string;
  createdAt: string;
  parentCommentId: number;
}
