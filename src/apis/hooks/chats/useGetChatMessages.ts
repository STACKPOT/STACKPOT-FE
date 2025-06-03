import { useInfiniteQuery } from "@tanstack/react-query";
import { getChatMessages } from "apis/chatAPI";
import { GetChatMessagesParams } from "apis/types/chat";

const useGetChatMessages = ({ chatRoomId, cursor, size, direction }: GetChatMessagesParams) => {
  return useInfiniteQuery({
    queryKey: ["chatRoom", chatRoomId],
    queryFn: () => getChatMessages({ chatRoomId, cursor, size, direction }),
    getNextPageParam: (lastPage) => lastPage.result?.nextCursor ?? null,
    initialPageParam: null,
    enabled: chatRoomId !== 0, // Added to prevent fetching when chatRoomId is 0
  });
};

export default useGetChatMessages;
