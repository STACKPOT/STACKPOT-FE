// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

const chatRooms = [
  {
    chatRoomId: 1,
    chatRoomName: "스택팟 사이드 프로젝트 A",
    thumbnailUrl: "https://picsum.photos/id/1011/32/32",
    lastChatTime: "2025-05-31T19:35:00",
    lastChat: "첫 대화를 시작해 보세요!",
    unReadMessageCount: 4,
  },
  {
    chatRoomId: 2,
    chatRoomName: "스택팟 사이드 프로젝트 B",
    thumbnailUrl: "https://picsum.photos/id/1012/32/32",
    lastChatTime: "2025-05-31T19:40:00",
    lastChat: "팀 회의가 곧 시작돼요.",
    unReadMessageCount: 0,
  },
  {
    chatRoomId: 3,
    chatRoomName: "스택팟 사이드 프로젝트 C",
    thumbnailUrl: "https://picsum.photos/id/1013/32/32",
    lastChatTime: "2025-05-31T19:45:00",
    lastChat: "마감일이 다가오고 있어요!",
    unReadMessageCount: 0,
  },
];

const generateMockChats = (chatRoomId: number, count: number) => {
  return Array.from({ length: count }).map((_, index) => {
    const date = new Date(2025, 4, 31 + Math.floor(index / 10), 13, 0, 0);
    date.setMinutes(28 + (index % 10));
    const chatId = `${chatRoomId}-${index + 1}`;
    return {
      chatId,
      chatRoomId,
      userName: index % 2 === 0 ? "나" : "너무 착한 알파",
      role: index % 3 === 0 ? "FRONTEND" : "BACKEND",
      message: `[${chatRoomId}]의 ${index + 1}번째 채팅 메시지입니다.`,
      fileUrl: "",
      createdAt: date.toISOString(),
    };
  });
};

const mockChats = [
  ...generateMockChats(1, 100),
  ...generateMockChats(2, 100),
  ...generateMockChats(3, 100),
];

export const handlers = [
  http.get("https://api.stackpot.co.kr/chat-rooms", () => {
    return HttpResponse.json({
      isSuccess: true,
      code: "SUCCESS",
      result: chatRooms,
      message: "Chat rooms fetched successfully.",
    });
  }),

  http.get("https://api.stackpot.co.kr/chat", ({ request }) => {
    const url = new URL(request.url);
    const chatRoomId = Number(url.searchParams.get("chatRoomId"));
    const cursor = url.searchParams.get("cursor");
    const direction = url.searchParams.get("direction");
    const size = Number(url.searchParams.get("size"));
    const roomChats = mockChats.filter(chat => chat.chatRoomId === chatRoomId);

    let startIndex = 0;
    if (cursor) {
      const index = roomChats.findIndex(chat => chat.chatId === cursor);
      if (index !== -1) {
        startIndex = direction === "prev" ? index - size : index + 1;
      }
    }

    const sliced = roomChats.slice(
      Math.max(startIndex, 0),
      Math.max(startIndex, 0) + size
    );

    const resultChats = direction === "prev" ? sliced.reverse() : sliced;
    const prevCursor = resultChats.length ? resultChats[0].chatId : null;
    const nextCursor = resultChats.length ? resultChats[resultChats.length - 1].chatId : null;

    return HttpResponse.json({
      isSuccess: true,
      code: "SUCCESS",
      result: {
        prevCursor,
        nextCursor,
        chats: resultChats,
      },
      message: "Chats fetched successfully.",
    });
  }),
];