import { useQuery } from "@tanstack/react-query";
import { getSearch } from "apis/searchAPI";
import { GetSearchParams } from "apis/types/search";

const useGetSearch = ({ type, keyword, page, size }: GetSearchParams) => {
  return useQuery({
    queryKey: ["search", keyword, type, page],
    queryFn: () => getSearch({ type, keyword, page, size }),
    select: (data) => data.result,
  });
};
export default useGetSearch;
