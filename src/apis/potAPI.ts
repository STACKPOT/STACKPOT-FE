import { apiGet, authApiPost } from "./apiUtils";
import { GetPotsParams, PotsResponse, CreatePotParams, CreatePotResponse } from "./types/pot";

export const CreatePot = async (createPotParams: CreatePotParams) => {
  return authApiPost<CreatePotResponse>("pots", createPotParams);
};

export const GetPots = async ({ page, size }: GetPotsParams) => {
  return apiGet<PotsResponse>("pots", { page, size });
};
