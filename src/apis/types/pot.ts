import { Participation } from "types/participation";
import { PotStatus } from "types/potStatus";
import { Role } from "types/role";
export interface PostPotParams {
  potName: string;
  potStartDate: string;
  potEndDate?: string;
  potDuration: string;
  potLan: string;
  potContent: string;
  potStatus?: PotStatus;
  potModeOfOperation: Participation;
  potSummary?: string;
  recruitmentDeadline: string;
  recruitmentDetails: RecruitmentDetail[];
}

export interface RecruitmentDetail {
  recruitmentRole: Role;
  recruitmentCount: number;
}
export interface PostPotResponse {
  potId: number;
  potName: string;
  potStartDate: string;
  potEndDate: string;
  potDuration: string;
  potLan: string;
  potContent: string;
  potStatus?: PotStatus;
  potModeOfOperation: Participation;
  potSummary: string;
  recruitmentDeadline: string;
  recruitmentDetails: RecruitmentDetailResponse;
}
export interface RecruitmentDetailResponse {
  recruitmentId: number;
  recruitmentRole: Role;
  recruitmentCount: number;
}

export interface GetPotsParams {
  page: number;
  size: number;
  recruitmentRole: string | null;
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

export interface GetPotDetailResponse {
  potDetail: PotDetail;
  applicants: GetPotApplicationResponse[];
}
interface PotDetail {
  userId: number;
  userRole: Role;
  userNickname: string;
  potId: number;
  potName: string;
  potStartDate: string;
  potDuration: string;
  potLan: string;
  potStatus: PotStatus;
  applied: boolean;
  potModeOfOperation: Participation;
  potContent: string;
  recruitmentDetails: string;
  owner: boolean;
  dday: string;
}
export interface GetPotApplicationResponse {
  potRole: Role;
  status: string;
  userId: number;
  userNickname: string;
}
export interface GetPotMemberResponse {
  nickname: string;
  kakaoId: string;
  potRole: Role;
  owner: boolean;
}
export interface PostPotApplicationParams {
  potId: number;
  body: PostPotApplicationBody;
}
export interface PostPotApplicationBody {
  potRole: Role;
}

export interface PostPotMembersParams {
  potId: number;
  body: PostPotMembersBody;
}
export interface PostPotMembersBody {
  applicantIds: number[];
}
export interface PostPotMemersResponse {
  potMemberId: number;
  potId: number;
  userId: number;
  roleName: Role;
  kakaoId: string;
  nickname: string;
  appealContent: string;
}
