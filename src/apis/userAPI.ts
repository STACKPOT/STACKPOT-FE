import { Role } from "types/role";
import { apiGet, authApiGet, authApiPatch } from "./apiUtils";
import { LogInResponse, postSignInPayload, SignInResponse } from "./types/user";

export const getKakaoLogIn = async (code: string) => {
  return apiGet<LogInResponse>("/users/oauth/kakao", { code });
};

export const patchSignIn = async (data: postSignInPayload) => {
  return authApiPatch<SignInResponse>("/users/profile", { data });
};

export const getNickname = async (role: Role) => {
  return authApiGet("/users/nickname", { role });
};
