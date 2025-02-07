import { useMutation } from "@tanstack/react-query";
import { getNickname } from "apis/userAPI";
import { Role } from "types/role";

const useGetNickname = (role: Role) => {
  return useMutation({
    mutationFn: () => getNickname(role),
  });
};

export default useGetNickname;
