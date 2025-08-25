import React from "react";
import {
  container,
  dividerStyle,
  emptyStateStyle,
  emptyTitleStyle,
} from "./Notification.style";
import NotificationItem from "../NotificationItem/NotificationItem";
import useGetNotification from "apis/hooks/notification/useGetNotification";

const Notification: React.FC = () => {
  const { data: notifications } = useGetNotification();

  console.log(notifications);
  return (
    <div css={container}>
      {notifications?.length === 0 ? (
        <div css={emptyStateStyle}>
          <p>👋</p>
          <p css={emptyTitleStyle}>알림이 없어요</p>
        </div>
      ) : (
        notifications?.map((item, index) => (
          <React.Fragment key={`${item.potId}-${item.feedId}}`}>
            <NotificationItem
              title={item.type}
              body={item.content}
              date={item.createdAt}
            />
            {index < notifications.length - 1 && <div css={dividerStyle} />}
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default Notification;
