export interface NotificationResponse {
  notificationId: number;
  potId: number | null;
  feedId: number | null;
  userName: string;
  type: string;
  content: string;
  createdAt: string;
}

export interface NotificationBody {
  notificationId: number;
  notificationType: string;
}
