import { useMutation } from "@tanstack/react-query";
import { patchChatRoomJoin } from "apis/chatAPI";

const usePatchChatRoomJoin = () => {
  return useMutation({
    mutationFn: (chatRoomId: number) => patchChatRoomJoin(chatRoomId),
  });
};

export default usePatchChatRoomJoin;
