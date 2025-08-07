import { Role } from "types/role";

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
  participants: any[];
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
  direction: "prev" | "next" | null;
}

export interface ChatMessagesResponse {
  chats: ChatMessages[];
  prevCursor: number;
  nextCursor: number;
}

export interface ChatMessages {
  chatId: number;
  userId: number;
  userName: string;
  role: Role;
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
  result: ChatMessagesResponse;
  message: string;
}

export interface PostChatRoomsInfoParams {
  potMemberIds: number[];
  potId: number;
}