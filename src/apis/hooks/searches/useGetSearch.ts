import { useQuery } from "@tanstack/react-query";
import { GetSearch } from "apis/\bsearchAPI";
import { GetSearchParams } from "apis/types/search";

const useGetSearch = ({ type, keyword, page, size }: GetSearchParams) => {
  return useQuery({
    queryKey: ["search", keyword, type, page],
    queryFn: () => GetSearch({ type, keyword, page, size }),
    select: (data) => data.result,
  });
};
export default useGetSearch;
