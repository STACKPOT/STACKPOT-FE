import { Role } from "types/role";

export interface SavedPotItem {
  userId: number;
  userRoles: Role;
  userNickname: string;

  potId: number;
  potName: string;
  potContent: string;

  recruitmentRoles: string[];
  isSaved: boolean;
  potSaveCount: number;
  isMember: boolean;
  dday: string;
}

export interface SavedPotsResponse {
  size: number;
  totalPages: number;
  pots: SavedPotItem[];
  currentPage: number;
  totalElements: number;
}
