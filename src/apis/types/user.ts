import { Role } from "types/role";

export interface LogInResponse {
  tokenServiceResponse: TokenServiceResponse;
  isNewUser: boolean;
}

export interface TokenServiceResponse {
  accessToken: string;
  refreshToken: string;
}

export interface postSignInPayload {
  role: Role | undefined;
  interest: string;
  kakaoId: string;
}

export interface SignInResponse {
  id: number;
  role: Role;
}
