export interface LogInResponse {
  tokenServiceResponse: TokenServiceResponse;
  isNewUser: boolean;
}

export interface TokenServiceResponse {
  accessToken: string;
  refreshToken: string;
}
