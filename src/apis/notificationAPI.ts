import { authApiGet, authApiPatch } from "./axios/apiUtils";
import { NotificationBody, NotificationResponse } from "./types/notification";

export const GetNotification = async () => {
  return authApiGet<NotificationResponse[]>(`/notifications`);
};

export const PatcheadNotification = async ({
  notificationId,
  notificationType,
}: NotificationBody) => {
  return authApiPatch(`/notifications/read`, {
    notificationId,
    notificationType,
  });
};
