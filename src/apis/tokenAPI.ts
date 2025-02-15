import { authApiPost } from "./apiUtils";
import { postReissueResponse } from "./types/token";

export const postReissue = async (refreshToken: string) => {
  return authApiPost<postReissueResponse>("/reissue", { refreshToken });
};
