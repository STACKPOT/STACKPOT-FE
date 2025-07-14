import { useMutation } from "@tanstack/react-query"
import { postChatRooms } from "apis/chatAPI";

const usePostChatRooms = () => {
  return useMutation({
    mutationFn: (potId: number) => postChatRooms(potId),
  });
};
export default usePostChatRooms;