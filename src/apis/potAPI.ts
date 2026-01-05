import {
  authApiDelete,
  authApiGet,
  authApiPatch,
  authApiPost,
} from "./axios/apiUtils";
import {
  GetPotsParams,
  PotsResponse,
  PostPotParams,
  PostPotResponse,
  GetPotDetailResponse,
  GetPotApplicationResponse,
  GetPotMemberResponse,
  PostPotApplicationBody,
  PostPotMembersBody,
  PostPotMemersResponse,
  GetPotsApplyResponse,
  GetPotsRecruitingResponse,
  GetPotsCompletedResponse,
  GetPotsCompletedParams,
  GetPotSummaryResponse,
  PatchPotCompleteBody,
  PostPotApplicationResponse,
  AppealPotPatch,
} from "./types/pot";

export const PostPot = async (postPotParams: PostPotParams) => {
  return authApiPost<PostPotResponse>("/pots", postPotParams);
};

export const GetPots = async ({
  page,
  size,
  recruitmentRoles,
  onlyMine,
}: GetPotsParams) => {
  return authApiGet<PotsResponse>("pots", {
    page,
    size,
    recruitmentRoles,
    onlyMine,
  });
};

export const GetPotsApply = async () => {
  return authApiGet<GetPotsApplyResponse[]>("/pots/apply");
};
export const GetPotDetail = async (potId: number) => {
  return authApiGet<GetPotDetailResponse>(`/pots/${potId}/details`);
};

export const GetPotApplications = async (potId: number) => {
  return authApiGet<GetPotApplicationResponse[]>(`/pots/${potId}/applications`);
};

export const GetPotMembers = async (potId: number) => {
  return authApiGet<GetPotMemberResponse[]>(`/pots/${potId}/members`);
};

export const PostPotApplications = async (
  potId: number,
  body: PostPotApplicationBody
) => {
  return authApiPost<PostPotApplicationResponse>(
    `pots/${potId}/applications`,
    body
  );
};

export const PostPotMembers = async (
  potId: number,
  body: PostPotMembersBody
) => {
  return authApiPost<PostPotMemersResponse>(`/pots/${potId}/members`, body);
};

export const DeletePotApplications = async (potId: number) => {
  return authApiDelete(`/pots/${potId}/applications`);
};

export const PatchPot = async (potId: number, body: PostPotParams) => {
  return authApiPatch<PostPotResponse>(`/pots/${potId}`, body);
};

export const DeletePot = async (potId: number) => {
  return authApiDelete(`/pots/${potId}`);
};
export const GetPotsRecruiting = async () => {
  return authApiGet<GetPotsRecruitingResponse>(`/pots/recruiting`);
};

export const GetPotsCompleted = async ({
  cursor,
  size,
}: GetPotsCompletedParams) => {
  return authApiGet<GetPotsCompletedResponse>(`/pots/completed`, {
    cursor,
    size,
  });
};

export const PatchAppealPot = async (potId: number, body: AppealPotPatch) => {
  return authApiPatch<string>(`/pots/${potId}/members/appeal`, body);
};

export const PatchPotComplete = async (
  potId: number,
  body: PatchPotCompleteBody
) => {
  return authApiPatch<PostPotResponse>(`/pots/${potId}/complete`, body);
};

export const GetPotSummary = async (potId: number) => {
  return authApiGet<GetPotSummaryResponse>(`/pots/${potId}/summary`);
};
