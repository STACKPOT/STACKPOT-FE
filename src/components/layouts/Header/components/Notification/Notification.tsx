import React from "react";
import {
  container,
  dividerStyle,
  emptyStateStyle,
  emptyTitleStyle,
} from "./Notification.style";
import NotificationItem from "../NotificationItem/NotificationItem";
import useGetNotification from "apis/hooks/notification/useGetNotification";
import usePostNotification from "apis/hooks/notification/usePatchNotification";
import { NotificationResponse } from "apis/types/notification";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";

interface NotificationProps {
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const { data: notifications } = useGetNotification();

  const { mutate } = usePostNotification();

  const handleClick = (item: NotificationResponse) => {
    mutate(
      { notificationId: item.notificationId, notificationType: item.type },
      {
        onSuccess: () => {
          onClose();
          if (item.feedId) {
            navigate(`${routes.feed.base}/${item.feedId}`);
          } else if (item.potId) {
            if (item.type === "팟 종료 알림") {
              navigate(`${routes.myPage}`);
            } else {
              navigate(`${routes.pot.base}/${item.potId}`);
            }
          }
        },
      }
    );
  };

  return (
    <div css={container}>
      {notifications?.length === 0 ? (
        <div css={emptyStateStyle}>
          <p>👋</p>
          <p css={emptyTitleStyle}>알림이 없어요</p>
        </div>
      ) : (
        notifications?.map((item, index) => (
          <React.Fragment key={`${item.notificationId}`}>
            <NotificationItem
              title={item.type}
              body={item.content}
              date={item.createdAt}
              onClick={() => handleClick(item)}
            />
            {index < notifications.length - 1 && <div css={dividerStyle} />}
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default Notification;
