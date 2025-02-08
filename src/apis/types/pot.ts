import { Role } from "types/role";

export interface GetPotsParams {
  page: number;
  size: number;
}

export interface PotsResponse {
  totalPages: number;
  currentPage: number;
  pots: Pots[];
}

interface Pots {
  userId: number;
  userRole: Role;
  userNickname: string;
  potId: number;
  potName: string;
  potContent: string;
  recruitmentRoles: string[];
  dday: string;
}

export interface GetPotsApplyResponse {
  userId: number;
  userRole: Role;
  userNickname: string;
  potId: number;
  potStatus: "RECRUITING" | "ONGOING" | "COMPLETED";
  potName: string;
  potStartDate: string;
  potDuration: string;
  potLan: string;
  potModeOfOperation: string;
  potContent: string;
  recruitmentDetails: string;
  dday: string;
}