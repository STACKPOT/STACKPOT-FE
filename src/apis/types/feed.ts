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
  createdAt: string;
  isLiked: boolean;
}

export interface GetFeedParams {
  category: string;
  sort: string;
  limit: number;
  cursor: number | null;
}

export interface FeedDetailResponse {
  writerId: number;
  writer: string;
  writerRole: Role;
  title: string;
  content: string;
  createdAt: string;
}
