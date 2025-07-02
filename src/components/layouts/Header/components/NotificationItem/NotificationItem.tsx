import {
  bodyStyle,
  container,
  dateStyle,
  titleStyle,
} from "./NotificationItem.style";

interface NotificationItemProps {
  title: string;
  body: string;
  date: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  body,
  date,
}) => {
  return (
    <div css={container}>
      <p css={titleStyle}>{title}</p>
      <p css={bodyStyle}>{body}</p>
      <p css={dateStyle}>{date}</p>
    </div>
  );
};

export default NotificationItem;
