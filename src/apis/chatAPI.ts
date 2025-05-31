import { authApiGet } from "./axios/apiUtils";
import { ChatMessagesResponse, ChatRoomResponse, GetChatMessagesParams } from "./types/chat";

export const getChatRooms = async () => {
  return authApiGet<ChatRoomResponse>(`/chat-rooms`);
};

export const getChatRoomsRefresh = async () => {
  return authApiGet<ChatRoomResponse>(`/chat-rooms/refresh`);
};

export const getChatMessages = async ({ chatRoomId, cursor, size = 20, direction }: GetChatMessagesParams) => {
  return authApiGet<ChatMessagesResponse>(`/chat`, { chatRoomId, cursor, size, direction });
};
