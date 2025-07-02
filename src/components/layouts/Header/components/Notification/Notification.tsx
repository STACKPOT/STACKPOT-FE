import React from "react";
import { container, dividerStyle } from "./Notification.style";
import NotificationItem from "../NotificationItem/NotificationItem";
import { notifications } from "mocks/notification";

const Notification: React.FC = () => {
  return (
    <div css={container}>
      {notifications.map((item, index) => (
        <React.Fragment key={item.id}>
          <NotificationItem
            title={item.title}
            body={item.body}
            date={item.date}
          />
          {index < notifications.length - 1 && <div css={dividerStyle} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Notification;
