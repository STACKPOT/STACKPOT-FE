import { useInfiniteQuery } from "@tanstack/react-query";
import { getChatMessages } from "apis/chatAPI";

const useGetChatMessages = ({ chatRoomId, size = 20 }: { chatRoomId: number; size?: number }) => {
  return useInfiniteQuery({
    queryKey: ["chatRoom", chatRoomId],
    queryFn: ({ pageParam }) => {
      const { cursor, direction } = pageParam;
      return getChatMessages({ chatRoomId, cursor, direction: direction as 'prev' | 'next' | null, size });
    },
    initialPageParam: { cursor: null, direction: 'next' },
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
    enabled: !!chatRoomId,
  });
};

export default useGetChatMessages;
