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
};

export interface NicknameResponse {
  nickname: string;
}