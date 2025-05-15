import { authApiGet } from "./axios/apiUtils";
import { GetSearchParams, SearchResponse } from "./types/search";

export const getSearch = async ({
  type,
  keyword,
  page,
  size,
}: GetSearchParams) => {
  return authApiGet<SearchResponse>("search", { type, keyword, page, size });
};
