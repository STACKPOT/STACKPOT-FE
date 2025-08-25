import { authApiGet } from "./axios/apiUtils";
import { NotificationResponse } from "./types/notification";

export const GetNotification = async () => {
  return authApiGet<NotificationResponse[]>(`/notifications`);
};
