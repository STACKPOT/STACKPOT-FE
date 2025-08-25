export interface NotificationResponse {
  notificationId: number;
  potId: number | null;
  feedId: number | null;
  userName: string;
  type: string;
  content: string;
  createdAt: string;
}
