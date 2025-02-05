export interface LogInResponse {
  tokenServiceResponse: TokenServiceResponse;
  isNewUser: boolean;
}

export interface TokenServiceResponse {
  accessToken: string;
  refreshToken: string;
}

export interface postSignInPayload {
  role: "FRONTEND" | "BACKEND" | "PLANNING" | "DESIGN" | undefined;
  interest: string;
  kakaoId: string;
}

export interface SignInResponse {
  id: number;
  role: "FRONTEND" | "BACKEND" | "PLANNING" | "DESIGN";
}
