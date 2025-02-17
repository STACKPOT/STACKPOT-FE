import { useQuery } from "@tanstack/react-query";
import { GetUsersMyPagesParams } from "apis/types/user";
import { getMembersMyPages } from "apis/userAPI";

const useGetMembersMyPages = ({ userId, dataType }: GetUsersMyPagesParams) => {
  return useQuery({
    queryKey: ["mypage", dataType],
    queryFn: () => getMembersMyPages({ userId, dataType }),
    select: (data) => data.result,
  });
};

export default useGetMembersMyPages;
