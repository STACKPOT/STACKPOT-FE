import { Role } from "types/role";

export interface LogInResponse {
  tokenServiceResponse: TokenServiceResponse;
  isNewUser: boolean;
  role: Role | null;
}

export interface TokenServiceResponse {
  accessToken: string;
  refreshToken: string;
}

export interface GetUserResponse {
  id: number;
  email: string;
  nickname: string;
  role: Role;
  interest: string;
  userTemperature: number;
  kakaoId: string;
  userIntroduction: string;
}
export interface postSignInPayload {
  role: Role;
  interest: string;
  kakaoId: string;
}

export interface SignInResponse {
  id: number;
  role: Role;
}

export interface PatchUserProfileUpdateParams {
  role: Role | undefined;
  interest: string;
  userIntroduction: string;
  kakaoId: string;
}

export interface NicknameResponse {
  nickname: string;
}

export interface GetUsersMyPagesParams {
  userId: string;
  dataType: string | null;
}

export interface GetUsersMyPagesResponse {
  id: number;
  nickname: string;
  role: Role;
  userTemperature: number;
  userIntroduction: string;
  completedPots: CompletedPots[];
  feeds: Feeds[];
}
interface Feeds {
  feedId: number;
  writer: string;
  writerRole: Role;
  title: string;
  content: string;
  likeCount: number;
  createdAt: string;
}

interface CompletedPots {
  potId: number;
  potName: string;
  potStartDate: string;
  potEndDate: string;
  potLan: string;
  members: string;
  userPotRole: string;
  myBadges: MyBadges[];
  memberCounts: number;
}

interface MyBadges {
  badgeId: number;
  badgeName: string;
}
