import { useMutation } from "@tanstack/react-query";
import { getNickname } from "apis/userAPI";

const useGetNickname = () => {
  return useMutation({
    mutationFn: () => getNickname(),
  });
};

export default useGetNickname;
