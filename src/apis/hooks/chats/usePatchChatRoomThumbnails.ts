import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchChatRoomThumbnail } from "apis/chatAPI";
import { PatchChatRoomThumnailParams } from "apis/types/chat";

const usePatchChatRoomThumbnails = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ chatRoomId, file }: PatchChatRoomThumnailParams) =>
      patchChatRoomThumbnail({ chatRoomId, file }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chatRooms"] });
    },
    onError: (error) => {
      console.error("썸네일 패치 오류:", error);
    },
  });
};

export default usePatchChatRoomThumbnails;