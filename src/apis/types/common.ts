import { Role } from "types/role";

export interface FeedItem {
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

export interface FeedEngagementResponse {
  size: number;
  totalPages: number;
  feeds: FeedItem[];
  currentPage: number;
  totalElements: number;
}
