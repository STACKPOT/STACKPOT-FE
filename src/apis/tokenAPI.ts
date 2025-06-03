import { apiPost} from "./axios/apiUtils";
import { postReissueResponse } from "./types/token";

export const postReissue = async (refreshToken: string) => {
  return apiPost<postReissueResponse>("/reissue", { refreshToken });
};
