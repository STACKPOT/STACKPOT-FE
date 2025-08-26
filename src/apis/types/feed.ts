import { Interest } from "types/interest";
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
  isOwner?: boolean;
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
  categories: Role[];
  interests: Interest[];
  seriesId: number | null;
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
  body: PostFeedParams;
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
  categories: Role[];
  interests: string[];
  series: Series | null;
}

export interface Series {
  comment: string;
  seriesId: number;
}

export interface PostFeedSeriesParams {
  comments: string[];
}