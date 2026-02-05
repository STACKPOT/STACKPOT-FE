import { FeedsLikesResponse } from "apis/types/save";
import { authApiGet, authApiPost } from "./axios/apiUtils";

export const postSavePot = async (potId: number) => {
  return authApiPost(`/saves/pots/${potId}`);
};
