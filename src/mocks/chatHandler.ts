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
    participants: [
      { userId: 1, userName: "졸린 양파", role: "FRONTEND" },
      { userId: 2, userName: "게으른 토끼", role: "BACKEND" },
      { userId: 3, userName: "열정적인 사자", role: "DESIGN" },
      { userId: 4, userName: "졸린 양파", role: "FRONTEND" },
      { userId: 5, userName: "게으른 토끼", role: "BACKEND" },
      { userId: 6, userName: "열정적인 사자", role: "PLAN" },

    ],
  },
  {
    chatRoomId: 2,
    chatRoomName: "스택팟 사이드 프로젝트 B",
    thumbnailUrl: "https://picsum.photos/id/1012/32/32",
    lastChatTime: "2025-05-31T19:40:00",
    lastChat: "팀 회의가 곧 시작돼요.",
    unReadMessageCount: 0,
    participants: [
      { userId: 1, userName: "졸린 양파", role: "FRONTEND" },
      { userId: 2, userName: "게으른 토끼", role: "BACKEND" },
      { userId: 3, userName: "열정적인 사자", role: "DESIGN" },
    ],
  },
  {
    chatRoomId: 3,
    chatRoomName: "스택팟 사이드 프로젝트 C",
    thumbnailUrl: null,
    lastChatTime: null,
    lastChat: null,
    unReadMessageCount: 0,
    participants: [
      { userId: 1, userName: "졸린 양파", role: "FRONTEND" },
      { userId: 2, userName: "게으른 토끼", role: "BACKEND" },
      { userId: 3, userName: "열정적인 사자", role: "PLAN" },
    ],
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
    return passthrough();

  }),

  http.get("https://api.stackpot.co.kr/chats", () => {
    return passthrough();
  }),
];