import { apiGet, authApiGet, authApiPost } from "./apiUtils";
import { GetPotsParams, PotsResponse, CreatePotParams, CreatePotResponse, PotDetailResponse, Applicant, PotMemberInfo } from "./types/pot";

export const CreatePot = async (createPotParams: CreatePotParams) => {
  return authApiPost<CreatePotResponse>("pots", createPotParams);
};

export const GetPots = async ({ page, size }: GetPotsParams) => {
  return apiGet<PotsResponse>("pots", { page, size });
};

export const GetPotDetail = async (potId: number) => {
  return authApiGet<PotDetailResponse>(`pots/${potId}/details`);
};

export const GetPotApplicants = async (potId: number) => {
  return authApiGet<Applicant[]>(`/pots/${potId}/applications`);
};

export const GetPotMemberInformation = async (potId: number) => {
  return authApiGet<PotMemberInfo[]>(`/pots/${potId}/members`);
};