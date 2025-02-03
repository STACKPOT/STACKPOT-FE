import { useQuery } from "@tanstack/react-query";
import { GetMyPage } from "apis/mypageAPI";

const useGetMyPage = () => {
  return useQuery({
    queryKey: ["mypage"],
    queryFn: GetMyPage,
    select: (data) => data.result,
  });
};

export default useGetMyPage;
