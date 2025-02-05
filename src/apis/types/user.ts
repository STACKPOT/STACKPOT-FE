export interface LogInResponse {
  tokenServiceResponse: TokenServiceResponse;
  isNewUser: boolean;
}

export interface TokenServiceResponse {
  accessToken: string;
  refreshToken: string;
}

export interface UserResponse {
  id: number;
  email: string;
  nickname: string;
  role: "FRONTEND" | "BACKEND" | "PLANNING" | "DESIGN";
  interest: string;
  userTemperature: number;
  kakaoId: string;
  userIntroduction: string;
}