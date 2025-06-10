import { useInfiniteQuery } from "@tanstack/react-query";
import { getChatMessages } from "apis/chatAPI";
import { GetChatMessagesParams } from "apis/types/chat";

const useGetChatMessages = ({ chatRoomId, cursor, size, direction }: GetChatMessagesParams) => {
  return useInfiniteQuery({
    queryKey: ["chatRoom", chatRoomId],
    queryFn: () =>
      getChatMessages({
        chatRoomId,
        cursor: cursor,
        size,
        direction: direction,
      }),
    getNextPageParam: (lastPage) =>
      lastPage.result?.nextCursor
        ? { cursor: lastPage.result.nextCursor, direction: "next" }
        : undefined,
    getPreviousPageParam: (lastPage) =>
      lastPage.result?.prevCursor
        ? { cursor: lastPage.result.prevCursor, direction: "prev" }
        : undefined,
    initialPageParam: null,
    enabled: chatRoomId !== 0,
  });
};

export default useGetChatMessages;
