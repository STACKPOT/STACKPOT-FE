import { useMutation } from "@tanstack/react-query"
import { postChatRoomsInfo } from "apis/chatAPI";

const usePostChatRoomsInfo = () => {
  return useMutation({
    mutationFn: ({ potMemberIds, potId }: { potMemberIds: number[], potId: number }) => postChatRoomsInfo({ potMemberIds, potId }),
  });
};
export default usePostChatRoomsInfo;