import { useQuery } from "@tanstack/react-query";
import { GetUsersMyPagesParams } from "apis/types/user";
import { getUsersMyPages } from "apis/userAPI";

const useGetUsersMyPages = ({ userId, dataType }: GetUsersMyPagesParams) => {
  return useQuery({
    queryKey: ["mypage", userId, dataType],
    queryFn: () => getUsersMyPages({ userId, dataType }),
    select: (data) => data.result,
  });
};

export default useGetUsersMyPages;
