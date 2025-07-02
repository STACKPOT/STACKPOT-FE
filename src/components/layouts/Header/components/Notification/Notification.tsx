import React from "react";
import {
  container,
  dividerStyle,
  emptyStateStyle,
  emptyTitleStyle,
} from "./Notification.style";
import NotificationItem from "../NotificationItem/NotificationItem";
import { notifications } from "mocks/notification";

const Notification: React.FC = () => {
  return (
    <div css={container}>
      {notifications.length === 0 ? (
        <div css={emptyStateStyle}>
          <p>👋</p>
          <p css={emptyTitleStyle}>알림이 없어요</p>
        </div>
      ) : (
        notifications.map((item, index) => (
          <React.Fragment key={`${item.id}-${index}`}>
            <NotificationItem
              title={item.title}
              body={item.body}
              date={item.date}
            />
            {index < notifications.length - 1 && <div css={dividerStyle} />}
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default Notification;
