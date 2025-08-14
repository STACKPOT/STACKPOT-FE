import { Participation } from "types/participation";
import { PotStatus } from "types/potStatus";
import { Role } from "types/role";
export interface PostPotParams {
  potName: string;
  potStartDate: string;
  potEndDate: string;
  potLan: string;
  potContent: string;
  potStatus?: PotStatus;
  potModeOfOperation: Participation;
  potSummary?: string;
  potRecruitmentDeadline: string;
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
  potLan: string;
  potContent: string;
  potStatus?: PotStatus;
  potModeOfOperation: Participation;
  potSummary: string;
  potRecruitmentDeadline: string;
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
  onlyMine: boolean;
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
  isSaved: boolean;
  potSaveCount: number;
}

export interface GetPotsApplyResponse {
  potId: number;
  potStatus: PotStatus;
  potName: string;
  potStartDate: string;
  potDuration: string;
  potModeOfOperation: Participation;
  potContent: string;
  recruitmentRoles: Role[];
  members: Record<Role, number>;
  dday: string;
}
export interface GetPotDetailResponse {
  potDetail: PotDetail;
  applicants: GetPotApplicationResponse[];
}
export interface PotDetail {
  userId: number;
  userRole: Role;
  userNickname: string;
  potId: number;
  potName: string;
  potStartDate: string;
  potEndDate: string;
  potDuration: string;
  potLan: string;
  potStatus: PotStatus;
  applied: boolean;
  potModeOfOperation: Participation;
  potContent: string;
  potRecruitmentDeadline: string;
  recruitmentDetails: string;
  recruitingMembers: Record<Role, number>;
  owner: boolean;
  dday: string;
  potSummary: string;
}
export interface GetPotApplicationResponse {
  applicationId: number;
  potRole: Role;
  status: string;
  userId: number;
  userNickname: string;
}
export interface GetPotMemberResponse {
  potMemberId: number;
  nickname: string;
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

export interface PostPotApplicationResponse {
  applicationId: number;
  potRole: PotRole;
  userId: number;
  userNickname: string;
}

export interface PotRole {
  name: Role;
  koreanName: string;
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
  nickname: string;
  appealContent: string;
}

export interface PatchPotParams {
  potId: number;
  body: PostPotParams;
}

export interface GetPotsRecruitingResponse {
  potId: number;
  potName: string;
  members: Record<Role, number>;
  dday: string;
}

export interface GetPotsCompletedParams {
  cursor: number | null;
  size: number;
}

export interface GetPotsCompletedResponse {
  content: CompletedPotDetail[];
  nextCursor: number;
  hasMore: boolean;
}
export interface CompletedPotDetail {
  potId: number;
  potName: string;
  potStartDate: string;
  potEndDate: string;
  potLan: string;
  members: string;
  userPotRole: Role;
  memberCounts: Record<Role, number>;
}

export interface PatchAppealPotParam {
  potId: number;
  body: AppealPotPatch;
}

export interface AppealPotPatch {
  appealContent: string;
}

export interface PatchPotCompleteParams {
  potId: number;
  body: PatchPotCompleteBody;
}

export interface GetPotSummaryResponse {
  summary: string;
}

export interface PatchPotCompleteBody {
  potName: string;
  potStartDate: string;
  potLan: string;
  potSummary: string;
}

export interface PatchDescriptionBody {
  userDescription: string;
}