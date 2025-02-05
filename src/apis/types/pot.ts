export interface CreatePotParams {
  potName: string;
  potStartDate: string;
  potEndDate?: string;
  potDuration: string;
  potLan: string;
  potContent: string;
  potStatus?: "RECRUITING" | "ONGOING" | "COMPLETED";
  potModeOfOperation: "ONLINE" | "OFFLINE" | "HYBRID";
  potSummary?: string;
  recruitmentDeadline: string;
  recruitmentDetails: RecruitmentDetail[];
}

export interface RecruitmentDetail {
  recruitmentRole: "FRONTEND" | "BACKEND" | "DESIGN" | "PLANNING";
  recruitmentCount: number;
}
export interface CreatePotResponse {
  potId: number;
  potName: string;
  potStartDate: string;
  potEndDate: string;
  potDuration: string;
  potLan: string;
  potContent: string;
  potStatus: "RECRUITING" | "ONGOING" | "COMPLETED";
  potModeOfOperation: "ONLINE" | "OFFLINE" | "HYBRID";
  potSummary: string;
  recruitmentDeadline: string;
  recruitmentDetails: RecruitmentDetailResponse;
}
export interface RecruitmentDetailResponse {
  recruitmentId: number;
  recruitmentRole: "FRONTEND" | "BACKEND" | "DESIGN" | "PLANNING";
  recruitmentCount: number;
}
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
  userRole: "FRONTEND" | "BACKEND" | "PLANNING" | "DESIGN";
  userNickname: string;
  potId: number;
  potName: string;
  potContent: string;
  recruitmentRoles: string[];
  dday: string;
}

export interface PotDetailResponse {
  potDetail: PotDetail;
  applicants: Applicant[];
}
export interface PotDetail {
  userId: number;
  userRole: "FRONTEND" | "BACKEND" | "PLANNING" | "DESIGN";
  userNickname: string;
  potId: number;
  potName: string;
  potStartDate: string;
  potDuration: string;
  potLan: string;
  potStatus: "RECRUITING" | "ONGOING" | "COMPLETED";
  applied: boolean;
  potModeOfOperation: "ONLINE" | "OFFLINE" | "HYBRID";
  potContent: string;
  recruitmentDetails: string;
  owner: boolean;
  dday: string;
}
export interface Applicant {
  potRole: "FRONTEND" | "BACKEND" | "PLANNING" | "DESIGN";
  status: string;
  userId: number;
  userNickname: string;
}
export interface PotMemberInfo {
  nickname: string;
  kakaoId: string;
}
