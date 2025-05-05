import { authApiPost } from "./axios/apiUtils";
import { postReissueResponse } from "./types/token";

export const postReissue = async (refreshToken: string) => {
  return authApiPost<postReissueResponse>("/reissue", { refreshToken });
};
