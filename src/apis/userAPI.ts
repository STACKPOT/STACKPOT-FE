import { apiGet, authApiGet } from "./apiUtils";
import { LogInResponse, postSignInPayload, SignInResponse } from "./types/user";

export const getKakaoLogIn = async (code: string) => {
  return apiGet<LogInResponse>("/users/oauth/kakao", { code });
};

export const postSignIn = async (data: postSignInPayload) => {
  return authApiGet<SignInResponse>("/users/profile", { data });
};
