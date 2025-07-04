import { useInfiniteQuery } from "@tanstack/react-query";
import { getChatMessages } from "apis/chatAPI";
import { GetChatMessagesParams } from "apis/types/chat";

const useGetChatMessages = ({ chatRoomId, cursor, direction, size = 20 }: GetChatMessagesParams) => {
  return useInfiniteQuery({
    queryKey: ["chatRoom", chatRoomId],
    queryFn: () => getChatMessages({
      chatRoomId, cursor, direction, size,
    }),
    getNextPageParam: (lastPage) => {
      const next = lastPage.result?.nextCursor;
      return next ? { cursor: next, direction: "next" } : undefined;
    },
    getPreviousPageParam: (lastPage) => {
      const prev = lastPage.result?.prevCursor;
      return prev ? { cursor: prev, direction: "prev" } : undefined;
    },

    initialPageParam: null,
    enabled: chatRoomId !== 0,
  });
};
export default useGetChatMessages;
