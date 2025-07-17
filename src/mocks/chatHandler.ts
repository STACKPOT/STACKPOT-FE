// src/mocks/handlers.ts
import { http, HttpResponse, passthrough } from 'msw';

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
    thumbnailUrl: null,
    lastChatTime: null,
    lastChat: null,
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
      userId: 18,
      userName: index % 2 === 0 ? "나" : "졸린 양파",
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
  ...generateMockChats(3, 0),
];



export const chatHandler = [


  http.get("https://api.stackpot.co.kr/chat-rooms", () => {
    // return passthrough();

    return HttpResponse.json({
      isSuccess: true,
      code: "SUCCESS",
      result: chatRooms,
      message: "Chat rooms fetched successfully.",
    });
  }),

  http.get("https://api.stackpot.co.kr/chats", ({ request }) => {
    // return passthrough();

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