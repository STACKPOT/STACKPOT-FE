import { authApiGet, authApiPost } from "./axios/apiUtils";
import { FeedEngagementResponse } from "apis/types/common";

export const postSavePot = async (potId: number) => {
  return authApiPost(`/saves/pots/${potId}`);
};

export const getSaveFeeds = async (params: { page: number; size: number }) => {
  return authApiGet<FeedEngagementResponse>("saves/feeds", params);
};
