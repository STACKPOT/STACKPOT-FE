import { authApiGet } from "./apiUtils";
import { MyPageResponse } from "./types/mypage";

export const GetMyPage = async () => {
  return authApiGet<MyPageResponse>("/users/mypages");
};
