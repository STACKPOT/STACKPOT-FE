import { Role } from "types/role";
import {
  apiGet,
  authApiDelete,
  authApiGet,
  authApiPatch,
  authApiPost,
} from "./axios/apiUtils";
import {
  LogInResponse,
  postSignInPayload,
  SignInResponse,
  GetUserResponse,
  MyPageResponse,
  GetMyPageParams,
  GetFinishedModalParams,
  FinishedModalResponse,
  NicknameResponse,
  PatchUserProfileUpdateParams,
  GetUsersMyPagesParams,
  GetUsersMyPagesResponse,
  GetUsersInfoParams,
  TokenServiceResponse,
  DescriptionResponse,
} from "./types/user";
import { PatchDescriptionBody, PatchPotCompleteBody, PostPotResponse } from "./types/pot";

export const getKakaoLogIn = async (code: string) => {
  return apiGet<LogInResponse>("/users/oauth/kakao", { code });
};

export const GetMyUser = async () => {
  return authApiGet<GetUserResponse>("/users");
};
export const patchSignIn = async ({
  role,
  interest,
  kakaoId,
}: postSignInPayload) => {
  return authApiPatch<SignInResponse>("/users/profile", {
    role,
    interest,
    kakaoId,
  });
};

export const getNickname = async (role: Role) => {
  return authApiGet<NicknameResponse>("/users/nickname", { role });
};

export const postNickname = async (nickname: string) => {
  return authApiPost<TokenServiceResponse>("/users/nickname/save", undefined, { nickname });
};

export const GetMyPage = async ({ dataType }: GetMyPageParams) => {
  // Map data type to endpoint, with a safe fallback
  const ENDPOINTS = {
    feed: "/users/feeds",
    pot: "/users/pots",
    description: "/users/description",
  } as const;

  const endpoint = (ENDPOINTS as Record<string, string>)[dataType] ?? ENDPOINTS.description;

  // Description는 응답 스키마가 다르므로 분기 처리
  if (endpoint === ENDPOINTS.description) {
    return authApiGet<DescriptionResponse>(endpoint);
  }
  return authApiGet<MyPageResponse>(endpoint);
};

export const GetFinishedModal = async (potId: number) => {
  return authApiGet<FinishedModalResponse>(`/my-pots/${potId}/details`);
};

export const patchUserProfileUpdate = async (
  data: PatchUserProfileUpdateParams
) => {
  return authApiPatch("/users/profile/update", data);
};

export const postLogout = async (refreshToken: string) => {
  return authApiPost("/users/logout", { refreshToken });
};

export const deleteUser = () => {
  return authApiDelete("/users/delete");
};

export const getUsersMyPages = async ({
  userId,
  dataType,
}: GetUsersMyPagesParams) => {
  return authApiGet<GetUsersMyPagesResponse>(`/users/${userId}/mypages`, {
    dataType,
  });
};

export const getUsersInfo = async ({ userId }: GetUsersInfoParams) => {
  return authApiGet<GetUserResponse>(`/users/${userId}`);
};

export const patchFinishedPot = async (
  potId: number,
  body: PatchPotCompleteBody
) => {
  return authApiPatch<PostPotResponse>(`/users/${potId}`, body);
};

export const patchDescription = async (
  body: PatchDescriptionBody,
) => {
  return authApiPatch('/users/description', body);
}