import { authApiGet } from "./apiUtils";
import { GetSearchParams, SearchResponse } from "./types/search";

export const GetSearch = async ({
  type,
  keyword,
  page,
  size,
}: GetSearchParams) => {
  return authApiGet<SearchResponse>("search", { type, keyword, page, size });
};
