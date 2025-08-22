import { Role } from "types/role";
import { Feeds } from "./user";

export interface GetSearchParams {
  type: string;
  keyword: string;
  page: number;
  size: number;
}
export interface GetFeedsSearchParams {
  keyword: string;
  nextCursor?: number;
  size: number;
  userId?: number;
}
export interface SearchResponse {
  currentPage: number;
  totalPages: number;
  content: Content[];
  totalElements: number;
}

export interface MyPageSearchResponse {
  feeds: Feeds[];
  nextCursor: number | null;
}
export interface Content {
  userId: number;
  userRole: Role;
  userNickname: string;
  potId: number;
  potName: string;
  potContent: string;
  recruitmentRoles: [];
  dday: string;
  potSaveCount: number;

  feedId: number;
  creatorRole: Role;
  title: string;
  content: string;
  creatorNickname: string;
  createdAt: string;
  likeCount: number;
  isLiked: boolean;
  saveCount: number;
  isSaved: boolean;
  commentCount: number;
  isCommented: boolean;
}
