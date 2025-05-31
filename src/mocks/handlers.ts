// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get("https://api.stackpot.co.kr/chat-rooms", () => {
    return HttpResponse.json(response);
  })
];
const chatRooms = [
  {
    chatRoomId: 1,
    chatRoomName: "스택팟 사이드 프로젝트 A스택팟 사이드 프로젝트 A스택팟 사이드 프로젝트 A스택팟 사이드 프로젝트 A스택팟 사이드 프로젝트 A스택팟 사이드 프로젝트 A스택팟 사이드 프로젝트 A",
    thumbnailUrl: "https://via.placeholder.com/32",
    lastChatTime: "2025-05-31T19:35:00",
    lastChat: "첫 대화를 시작해 보세요!",
    unReadMessageCount: 4,
  },
  {
    chatRoomId: 2,
    chatRoomName: "스택팟 사이드 프로젝트 B",
    thumbnailUrl: "https://via.placeholder.com/32",
    lastChatTime: "2025-05-31T19:35:00",
    lastChat: "팀 회의가 곧 시작돼요.",
    unReadMessageCount: 0,
  },
  {
    chatRoomId: 3,
    chatRoomName: "스택팟 사이드 프로젝트 C",
    thumbnailUrl: "https://via.placeholder.com/32",
    lastChatTime: "2025-05-31T19:35:00",
    lastChat: "마감일이 다가오고 있어요!",
    unReadMessageCount: 0,
  },
];

const response = {
  isSuccess: true,
  code: "string",
  result: chatRooms,
  message: "string"
}