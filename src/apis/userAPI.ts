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
  FinishedModalResponse,
  NicknameResponse,
  PatchUserProfileUpdateParams,
  GetUsersInfoParams,
  TokenServiceResponse,
  DescriptionResponse,
  GetMyPagePotsParams,
  MyPagePotsResponse,
  MyPageFeedsResponse,
  GetPotSummaryResponse,
  GetFeedsParams,
} from "./types/user";
import {
  PatchDescriptionBody,
  PatchPotCompleteBody,
  PostPotResponse,
} from "./types/pot";

export const getGoogleLogIn = async (code: string) => {
  return apiGet<LogInResponse>("/users/oauth/google", { code });
};

export const getKakaoLogIn = async (code: string) => {
  return apiGet<LogInResponse>("/users/oauth/kakao", { code });
};

export const getNaverLogIn = async (code: string) => {
  return apiGet<LogInResponse>("/users/oauth/naver", { code });
};

export const GetMyUser = async () => {
  return authApiGet<GetUserResponse>("/users");
};

export const patchSignIn = async ({ roles, interest }: postSignInPayload) => {
  return authApiPatch<SignInResponse>("/users/profile", {
    roles,
    interest,
  });
};

export const getNickname = async () => {
  return authApiGet<NicknameResponse>("/users/nickname");
};

export const postNickname = async (nickname: string) => {
  return authApiPost<TokenServiceResponse>("/users/nickname/save", undefined, {
    nickname,
  });
};

// export const GetMyPage = async ({ dataType }: GetMyPageParams) => {
//   if (dataType === "feed") {
//     return authApiGet<MyPageResponse>("/users/mypages");
//   } else if (dataType === "pot") {
//     return authApiGet<MyPageResponse>("/users/mypages", { dataType });
//   } else {
//     return authApiGet<DescriptionResponse>("/users/description");
//   }
// };
export const getMyPageFeeds = async ({
  nextCursor,
  size,
  seriesId,
}: GetFeedsParams) => {
  return authApiGet<MyPageFeedsResponse>("/users/feeds", {
    nextCursor,
    size,
    seriesId,
  });
};

export const getMyPagePots = async ({ potStatus }: GetMyPagePotsParams) => {
  return authApiGet<MyPagePotsResponse>("/users/pots", { potStatus });
};
export const getMyPageDescription = async () => {
  return authApiGet<DescriptionResponse>("/users/description");
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

export const getUsersMyPagesFeeds = async ({
  nextCursor,
  size,
  userId,
  seriesId,
}: GetFeedsParams) => {
  return authApiGet<MyPageFeedsResponse>(`/users/${userId}/feeds`, {
    nextCursor,
    size,
    seriesId,
  });
};

export const getUsersMyPagesPots = async (
  userId: number,
  potStatus?: GetMyPagePotsParams["potStatus"]
) => {
  const url = `/users/pots/${userId}`;
  const params = potStatus ? { potStatus } : undefined;
  return authApiGet<MyPagePotsResponse>(url, params);
};

export const getUsersMyPagesDescription = async (userId: number) => {
  return authApiGet<DescriptionResponse>(`/users/description/${userId}`);
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

export const getPotSummary = async (potId: number) => {
  return authApiGet<GetPotSummaryResponse>(`/users/potSummary/${potId}`);
};

export const patchDescription = async (body: PatchDescriptionBody) => {
  return authApiPatch("/users/description", body);
};

export const getMyPagesPotAppealContent = async (potId: number) => {
  return authApiGet<FinishedModalResponse>(`/users/potAppealContent/${potId}`);
};

export const getUsersMyPagesPotAppealContent = async (
  potId: number,
  userId: number
) => {
  return authApiGet<FinishedModalResponse>(
    `/users/potAppealContent/${potId}/${userId}`
  );
};

export const getFeedSeries = async () => {
  return authApiGet<Record<string, string>>(`/feeds/series`);
};

export const getUserFeedSeries = async (userId: number) => {
  return authApiGet<Record<string, string>>(`/feeds/series/${userId}`);
};
