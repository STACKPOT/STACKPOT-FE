import { apiGet, authApiGet } from "./apiUtils";
import { LogInResponse, UserResponse } from "./types/user";

export const getKakaoLogIn = async (code: string) => {
  return apiGet<LogInResponse>("/users/oauth/kakao", { code });
};

export const getMyProfile = async () => {
  return authApiGet<UserResponse>("users");
};