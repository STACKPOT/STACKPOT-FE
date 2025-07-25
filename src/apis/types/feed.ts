import { Role } from "types/role";

export interface FeedResponse {
  feeds: Feeds[];
  nextCursor: number;
}

interface Feeds {
  feedId: number;
  writer: string;
  writerId: number;
  writerRole: Role;
  title: string;
  content: string;
  likeCount: number;
  saveCount: number;
  commentCount: number;
  createdAt: string;
  isLiked: boolean;
  isSaved: boolean;
  isCommented: boolean;
}

export interface GetFeedParams {
  category: string;
  sort: string;
  limit: number;
  cursor: number | null;
}

export interface PostFeedParams {
  title: string;
  content: string;
  category: string;
}

export interface PostFeedResponse {
  feedId: number;
  writerId: number;
  writer: string;
  writerRole: Role;
  title: string;
  content: string;
  likeCount: number;
  isLiked: boolean;
  createdAt: string;
}

export interface PatchFeedParams {
  feedId: number;
  body: FeedPatch;
}

export interface FeedPatch {
  title: string | null;
  content: string | null;
  category: string | null;
}
export interface PatchFeedResponse {
  feedId: number;
  writerId: number;
  writer: string;
  writerRole: Role;
  title: string;
  content: string;
  likeCount: number;
  isLiked: boolean;
  createdAt: string;
}

export interface GetFeedDetailParams {
  feedId: number;
}

export interface GetFeedDetailResponse {
  feed: FeedDetail;
  owner: boolean;
}

export interface FeedDetail {
  feedId: number;
  writerId: number;
  writer: string;
  writerRole: Role;
  title: string;
  content: string;
  likeCount: number;
  isLiked: boolean;
  createdAt: string;
  categories: string[];
  interests: string[];
  series: Record<string, string>;
}
