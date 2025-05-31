import { useInfiniteQuery } from "@tanstack/react-query";
import { getChatMessages } from "apis/chatAPI";
import { GetChatMessagesParams } from "apis/types/chat";

const useGetChatMessages = ({ chatRoomId, cursor, size, direction }: GetChatMessagesParams) => {
  return useInfiniteQuery({
    queryKey: ["feeds", chatRoomId],
    queryFn: () => getChatMessages({ chatRoomId, cursor, size, direction }),
    getNextPageParam: (lastPage) => lastPage.result?.nextCursor ?? null,
    initialPageParam: cursor ?? null,
  });
};

export default useGetChatMessages;
