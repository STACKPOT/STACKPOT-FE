import { apiGet } from "./apiUtils";
import { GetPotsParams, PotsResponse } from "./types/pot";

export const GetPots = async ({ page, size }: GetPotsParams) => {
  return apiGet<PotsResponse>("pots", { page, size });
};
