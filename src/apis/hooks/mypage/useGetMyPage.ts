import { useQuery } from "@tanstack/react-query";
import { GetMyPage } from "apis/mypageAPI";
import { GetMyPageParams } from "apis/types/mypage";

const useGetMyPage = ({ dataType }: GetMyPageParams) => {
  return useQuery({
    queryKey: ["mypage", dataType],
    queryFn: () => GetMyPage({ dataType }), // dataType 전달
    select: (data) => data.result, // 응답에서 result만 선택
  });
};

export default useGetMyPage;
