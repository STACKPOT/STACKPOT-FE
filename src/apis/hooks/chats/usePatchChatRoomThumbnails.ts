import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchChatRoomThumbnail } from "apis/chatAPI";
import { PatchChatRoomThumnailParams } from "apis/types/chat";
import { useSnackbar } from "providers";

const usePatchChatRoomThumbnails = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: ({ chatRoomId, file }: PatchChatRoomThumnailParams) =>
      patchChatRoomThumbnail({ chatRoomId, file }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chatRooms"] });
      showSnackbar({
        message: "썸네일이 성공적으로 업로드되었습니다!",
        severity: "success",
      });
    },
    onError: () => {
      showSnackbar({
        message: "썸네일 업로드에 실패했습니다.",
        severity: "error",
      });
    },
  });
};

export default usePatchChatRoomThumbnails;