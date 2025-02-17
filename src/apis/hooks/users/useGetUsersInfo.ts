import { useQuery } from "@tanstack/react-query";
import { GetUsersInfoParams } from "apis/types/user";
import { getUsersInfo } from "apis/userAPI";

const useGetUsersInfo = ({ userId }: GetUsersInfoParams) => {
  return useQuery({
    queryKey: ["userInfo", userId],
    queryFn: () => getUsersInfo({ userId }),
    select: (data) => data.result,
  });
};

export default useGetUsersInfo;
