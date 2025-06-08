import { useMutation } from "@tanstack/react-query";
import { patchChatRoomThumbnail } from "apis/chatAPI";
import { PatchChatRoomThumnailParams } from "apis/types/chat";

const usePatchChatRoomThumbnails = () => {
  return useMutation({
    mutationFn: ({ chatRoomId, file }: PatchChatRoomThumnailParams) =>
      patchChatRoomThumbnail({ chatRoomId, file }),
  });
};

export default usePatchChatRoomThumbnails;
