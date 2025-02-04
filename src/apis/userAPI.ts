import { apiGet } from "./apiUtils";
import { LogInResponse } from "./types/user";

export const getKakaoLogIn = async (code: string) => {
  return apiGet<LogInResponse>("/users/oauth/kakao", { code });
};
