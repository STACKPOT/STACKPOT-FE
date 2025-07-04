import { useMutation } from "@tanstack/react-query"
import { postChatRoomsInfo } from "apis/chatAPI";
import { PostChatRoomsInfoParams } from "apis/types/chat";

const usePostChatRoomsInfo = () => {
  return useMutation({
    mutationFn: (params: PostChatRoomsInfoParams) => postChatRoomsInfo(params),
  });
};
export default usePostChatRoomsInfo;