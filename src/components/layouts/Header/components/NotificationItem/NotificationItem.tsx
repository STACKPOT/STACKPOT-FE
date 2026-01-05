import {
  bodyStyle,
  container,
  dateStyle,
  titleStyle,
} from "./NotificationItem.style";

interface NotificationItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  body: string;
  date: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  body,
  date,
  ...props
}) => {
  return (
    <div css={container} {...props}>
      <p css={titleStyle}>{title}</p>
      <p css={bodyStyle}>{body}</p>
      <p css={dateStyle}>{date}</p>
    </div>
  );
};

export default NotificationItem;
