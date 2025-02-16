import { apiGet, authApiDelete, authApiGet, authApiPatch, authApiPost } from "./apiUtils";
import { GetPotsParams, PotsResponse, PostPotParams, PostPotResponse, GetPotDetailResponse, GetPotApplicationResponse, GetPotMemberResponse, PostPotApplicationBody, PostPotMembersBody, PostPotMemersResponse, GetPotsApplyResponse, GetPotsRecruitingResponse, GetPotsCompletedResponse, GetPotsCompletedParams } from "./types/pot";

export const PostPot = async (postPotParams: PostPotParams) => {
  return authApiPost<PostPotResponse>("/pots", postPotParams);
};

export const GetPots = async ({ page, size, recruitmentRole }: GetPotsParams) => {
  return apiGet<PotsResponse>("pots", { page, size, recruitmentRole });
};

export const GetPotsApply = async () => {
  return authApiGet<GetPotsApplyResponse[]>("/pots/apply");
}
export const GetPotDetail = async (potId: number) => {
  return authApiGet<GetPotDetailResponse>(`/pots/${potId}/details`);
};

export const GetPotApplications = async (potId: number) => {
  return authApiGet<GetPotApplicationResponse[]>(`/pots/${potId}/applications`);
};

export const GetPotMembers = async (potId: number) => {
  return authApiGet<GetPotMemberResponse[]>(`/pots/${potId}/members`);
};

export const PostPotApplications = async (potId: number, body: PostPotApplicationBody) => {
  return authApiPost<GetPotApplicationResponse>(`pots/${potId}/applications`, body);
};

export const PostPotMembers = async (potId: number, body: PostPotMembersBody) => {
  return authApiPost<PostPotMemersResponse>(`/pots/${potId}/members`, body);
};

export const DeletePotApplications = async (potId: number) => {
  return authApiDelete(`/pots/${potId}/applications`);
}

export const PatchPot = async (potId: number, body: PostPotParams) => {
  return authApiPatch<PostPotResponse>(`/pots/${potId}`, body);
};

export const DeletePot = async (potId: number) => {
  return authApiDelete(`/pots/${potId}`);
}
  export const GetPotsRecruiting = async () => {
  return authApiGet<GetPotsRecruitingResponse[]>(`/pots/recruiting`);
}

export const GetPotsCompleted = async ({ cursor, size }: GetPotsCompletedParams) => {
  return authApiGet<GetPotsCompletedResponse>(`/pots/completed`, { cursor, size });
};