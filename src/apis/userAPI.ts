import { Role } from "types/role";
import { apiGet, authApiGet, authApiPatch, authApiPost } from "./apiUtils";
import { LogInResponse, postSignInPayload, SignInResponse, GetUserResponse } from "./types/user";

export const getKakaoLogIn = async (code: string) => {
  return apiGet<LogInResponse>("/users/oauth/kakao", { code });
};

export const GetMyUser = async () => {
  return authApiGet<GetUserResponse>("/users");
};
export const patchSignIn = async (data: postSignInPayload) => {
  return authApiPatch<SignInResponse>("/users/profile", { data });
};

export const getNickname = async (role: Role) => {
  return authApiGet("/users/nickname", { role });
};

export const postNickname = async (nickname: string) => {
  return authApiPost("/users/nickname/save", undefined, { nickname });
};
