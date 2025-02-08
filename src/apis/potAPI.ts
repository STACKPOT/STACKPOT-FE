import { apiGet, authApiGet } from "./apiUtils";
import { GetPotsApplyResponse, GetPotsParams, PotsResponse } from "./types/pot";

export const GetPots = async ({ page, size }: GetPotsParams) => {
  return apiGet<PotsResponse>("pots", { page, size });
};

export const GetPotsApply = async () => {
  return authApiGet<GetPotsApplyResponse[]>("/pots/apply");
}
