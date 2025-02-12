import { Role } from "types/role";

export interface GetSearchParams {
  type: string;
  keyword: string;
  page: number;
  size: number;
}

export interface SearchResponse {
  currentPage: number;
  totalPages: number;
  content: Content[];
  totalElements: number;
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

  feedId: number;
  creatorRole: Role;
  title: string;
  content: string;
  creatorNickname: string;
  createdAt: string;
  likeCount: number;
}
