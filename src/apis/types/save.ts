import { Role } from "types/role";

export interface FeedLikeItem {
  feedId: number;
  writerId: number;
  writer: string;
  writerRoles: Role[];
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
  saveCount: number;
  isLiked: boolean;
  isSaved: boolean;
  createdAt: string;
  isOwner: boolean;
}

export interface FeedsLikesResponse {
  size: number;
  totalPages: number;
  feeds: FeedLikeItem[];
  currentPage: number;
  totalElements: number;
}
