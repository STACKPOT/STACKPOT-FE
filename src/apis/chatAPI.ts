import { authApiGet, authApiPatch, authApiPost } from "./axios/apiUtils";
import { ChatMessagesResponse, ChatRoomResponse, GetChatMessagesParams, PatchChatRoomThumnailParams } from "./types/chat";


export const getChatRooms = async () => {
  return authApiGet<ChatRoomResponse>("/chat-rooms");
};

export const postChatRooms = async (potId: number) => {
  return authApiPost("/chat-rooms", { potId });
};

export const postChatRoomsInfo = async ({ potMemberIds, potId }: { potMemberIds: number[], potId: number }) => {
  return authApiPost("/chat-rooms/info", { potMemberIds, potId });
};

export const patchChatRoomThumbnail = async ({ chatRoomId, file }: PatchChatRoomThumnailParams) => {
  const formData = new FormData();
  formData.append("file", file);

  return authApiPatch(`/chat-rooms/${chatRoomId}/thumbnails`, formData);
};

export const patchChatRoomJoin = async (chatRoomId: number) => {
  return authApiPatch("/chat-rooms/join", { chatRoomId });
};

export const getChatMessages = async ({ chatRoomId, cursor, size = 20, direction }: GetChatMessagesParams) => {
  return authApiGet<ChatMessagesResponse>("/chats", { chatRoomId, cursor, size, direction });
};