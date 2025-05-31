export interface ChatRoomResponse {
  isSuccess: boolean;
  code: string;
  result: ChatRoom[];
  message: string;
}

export interface ChatRoom {
  chatRoomId: number;
  chatRoomName: string;
  thumbnailUrl: string;
  lastChatTime: string;
  lastChat: string;
  unReadMessageCount: number;
}

export interface GetFeedParams {
  category: string;
  sort: string;
  limit: number;
  cursor: number | null;
}

export interface GetChatMessagesParams {
  chatRoomId: number;
  cursor: number | null;
  size: number;
  direction: "prev" | "next";
}

export interface ChatMessagesResponse {
  feeds: ChatMessages[];
  prevCursor: number;
  nextCursor: number;
}

interface ChatMessages {
  chatId: number;
  userName: string;
  message: string;
  fileUrl: string;
  createdAt: string;
}

export interface PatchChatRoomThumnailParams {
  chatRoomId: number;
  file: File;
}
export interface PatchChatRoomResponse {
  isSuccess: boolean;
  code: string;
  result: {};
  message: string;
}