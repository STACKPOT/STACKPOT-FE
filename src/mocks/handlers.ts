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
    thumbnailUrl: "https://picsum.photos/id/1013/32/32",
    lastChatTime: "2025-05-31T19:45:00",
    lastChat: "마감일이 다가오고 있어요!",
    unReadMessageCount: 0,
  },
];

const mockChats = Array.from({ length: 50 }).map((_, index) => {
  const dayOffset = Math.floor(index / 10); // 0~4
  const date = new Date(2025, 4, 31 + dayOffset, 13, 0, 0); // May 31 + dayOffset
  date.setMinutes(28 + (index % 10)); // Vary minute slightly per message
  return {
    chatId: String(index + 1),
    userName: index % 2 === 0 ? "나" : "너무 착한 알파",
    role: index % 3 === 0 ? "FRONTEND" : "BACKEND",
    message: `이것은 ${index + 1}번째 채팅 메시지입니다.`,
    fileUrl: "",
    createdAt: date.toISOString(),
  };
});
const introduction = {
  introduction: {
    title: "안녕하세요. 조용히 그러나 꾸준히 성장하는 개발자 지망생, ‘너무 착한 버섯’입니다.",
    body: `대학에서 소프트웨어와 데이터를 중심으로 공부하고 있으며, 사용자의 입장에서 고민하고, 더 나은 경험을 제공하는 것을 중요하게 생각합니다. 처음에는 단순히 "작동하는 프로그램을 만들기"가 목표였다면, 이제는 "사람들에게 가치 있는 기능을 전달하는 것"이 개발의 본질이라는 생각을 가지고 프로젝트를 이어가고 있습니다.
  프론트엔드와 백엔드 모두 경험해보며 웹 전체 흐름을 이해하려 노력했고, 최근에는 사용자와 직접 맞닿는 프론트엔드 개발에 특히 매력을 느끼고 있습니다. React, TypeScript 등으로 UI를 구성하고, Figma로 직접 디자인하며 사용성까지 고려한 개발을 지향합니다.
  프로젝트를 할 때는 혼자서 모든 걸 해결하기보다, 팀원들과 소통하며 함께 자라는 과정이 중요하다고 생각합니다. 그래서 협업 툴을 능숙하게 다루고, 코드 리뷰와 의견 공유에 적극적입니다. 아직 부족한 점도 많지만, 그만큼 더 배울 수 있는 여지가 크다고 믿습니다.
  저는 오늘보다 나은 내일을 만드는 사람이 되고 싶습니다.코드 한 줄에 진심을 담는 개발자가 되기 위해, 오늘도 천천히 자라나는 중입니다.`,
  }
};

export const handlers = [
  http.get("https://api.stackpot.co.kr/users/mypages", ({ request }) => {
    const url = new URL(request.url);
    const dataType = url.searchParams.get("dataType");
    if (dataType === "introduction") {
      return HttpResponse.json({
        isSuccess: true,
        code: "SUCCESS",
        result: introduction,
        message: "introduction fetched successfully.",
      });
    }

    return passthrough();
  }),

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
    const size = Number(url.searchParams.get("size")) || 20;

    let sortedChats = [...mockChats];
    if (direction === "prev") {
      sortedChats.sort((a, b) => Number(b.chatId) - Number(a.chatId));
    } else {
      sortedChats.sort((a, b) => Number(a.chatId) - Number(b.chatId));
    }

    let startIndex = 0;
    if (cursor) {
      const index = sortedChats.findIndex(chat => chat.chatId === cursor);
      if (index !== -1) {
        startIndex = direction === "prev" ? index - size : index + 1;
      }
    }

    const sliced = sortedChats.slice(
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