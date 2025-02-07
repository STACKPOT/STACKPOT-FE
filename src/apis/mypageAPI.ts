import { authApiGet } from "./apiUtils";
import { GetMyPageParams, MyPageResponse } from "./types/mypage";

export const GetMyPage = async ({ dataType }: GetMyPageParams) => {
  return authApiGet<MyPageResponse>("/users/mypages", { dataType });
};
