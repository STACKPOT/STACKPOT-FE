import { authApiGet } from "./axios/apiUtils";
import { GetFeedsSearchParams, GetSearchParams, MyPageSearchResponse, SearchResponse } from "./types/search";

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
}: GetFeedsSearchParams) => {
  return authApiGet<MyPageSearchResponse>("search/my-feeds", { keyword, nextCursor, size });
};

export const getSearchFeedsUsers = async ({
  keyword,
  nextCursor,
  size,
  userId
}: GetFeedsSearchParams) => {
  return authApiGet<MyPageSearchResponse>(`search/feeds/users/${userId}`, { keyword, nextCursor, size });
};
