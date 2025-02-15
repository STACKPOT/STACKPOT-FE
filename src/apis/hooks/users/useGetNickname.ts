import { useMutation } from "@tanstack/react-query";
import { getNickname } from "apis/userAPI";
import { Role } from "types/role";

const useGetNickname = () => {
  return useMutation({
    mutationFn: (role: Role) => getNickname(role),
  });
};

export default useGetNickname;
