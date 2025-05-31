import { authApiGet, authApiPatch } from "./axios/apiUtils";
import { ChatMessagesResponse, ChatRoomResponse, GetChatMessagesParams, PatchChatRoomThumnailParams } from "./types/chat";

export const getChatRooms = async () => {
  return authApiGet<ChatRoomResponse>("/chat-rooms");
};

export const getChatRoomsRefresh = async () => {
  return authApiGet<ChatRoomResponse>("/chat-rooms/refresh");
};

export const getChatMessages = async ({ chatRoomId, cursor, size = 20, direction }: GetChatMessagesParams) => {
  return authApiGet<ChatMessagesResponse>("/chat", { chatRoomId, cursor, size, direction });
};

export const patchChatRoomJoin = async ( chatRoomId: number ) => {
  return authApiPatch("/chat-rooms/thumbnails", {chatRoomId});
};

export const patchChatRoomThumbnail = async ({ chatRoomId, file} : PatchChatRoomThumnailParams ) => {
  const formData = new FormData();
  formData.append("chatRoomId", chatRoomId.toString());
  formData.append("file", file);

  return authApiPatch("/chat-rooms/thumbnails", formData);
};