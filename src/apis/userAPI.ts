import { apiGet } from "./apiUtils";
import { LogInResponse } from "./types/user";

export const GetKakaoLogIn = async (code: string) => {
  return apiGet<LogInResponse>("/users/oauth/kakao", { code });
};
