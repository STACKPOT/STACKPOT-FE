import { useInfiniteQuery } from "@tanstack/react-query";
import { getChatMessages } from "apis/chatAPI";

const useGetChatMessages = ({ chatRoomId, size = 20 }: { chatRoomId?: number; size?: number }) => {
  return useInfiniteQuery({
    queryKey: ["chatRoom", chatRoomId],
    queryFn: ({ pageParam }) => {
      const { cursor, direction } = pageParam;
      // enabled 옵션으로 chatRoomId가 정의된 상태에서만 실행됨
      const cursorForApi = cursor === 0 ? null : cursor;
      return getChatMessages({ chatRoomId: chatRoomId as number, cursor: cursorForApi, direction: direction as 'prev' | 'next' | null, size });
    },
    initialPageParam: { cursor: 0, direction: 'next' },
    getNextPageParam: (lastPage) => {
      const next = lastPage.result?.nextCursor;
      return next !== null && next !== undefined
        ? { cursor: next, direction: 'next' }
        : undefined;
    },
    getPreviousPageParam: (firstPage) => {
      const prev = firstPage.result?.prevCursor;
      return prev !== null && prev !== undefined
        ? { cursor: prev, direction: 'prev' }
        : undefined;
    },
    // 선택 전에는 절대 호출되지 않도록 엄격히 보호
    enabled: chatRoomId !== undefined,
  });
};

export default useGetChatMessages;
