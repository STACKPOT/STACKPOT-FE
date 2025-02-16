import { useQuery } from "@tanstack/react-query";
import { GetMyPage } from "apis/userAPI";
import { GetMyPageParams } from "apis/types/mypage";

const useGetMyPage = ({ dataType }: GetMyPageParams) => {
  return useQuery({
    queryKey: ["mypage", dataType],
    queryFn: () => GetMyPage({ dataType }),
    select: (data) => data.result,
  });
};

export default useGetMyPage;
