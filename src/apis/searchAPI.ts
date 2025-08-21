import { authApiGet } from "./axios/apiUtils";
import { GetMyFeedsSearchParams, GetSearchParams, GetUserFeedsSearchParams, MyPageSearchResponse, SearchResponse } from "./types/search";

export const getSearch = async ({
  type,
  keyword,
  page,
  size,
}: GetSearchParams) => {
  return authApiGet<SearchResponse>("search", { type, keyword, page, size });
};

export const getSearchMyFeeds = async ({
  keyword,
  nextCursor,
  size,
}: GetMyFeedsSearchParams) => {
  return authApiGet<MyPageSearchResponse>("search/my-feeds", { keyword, nextCursor, size });
};

export const getSearchFeedsUsers = async ({
  keyword,
  nextCursor,
  size,
  userId
}: GetUserFeedsSearchParams) => {
  return authApiGet<MyPageSearchResponse>(`search/feeds/users/${userId}`, { keyword, nextCursor, size });
};
