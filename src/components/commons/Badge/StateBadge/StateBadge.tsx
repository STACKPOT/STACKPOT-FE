import { AnotherTaskStatus } from "types/taskStatus";
import { badgeStyle } from "./StateBadge.style";

interface StateBadgeProps {
  content: AnotherTaskStatus;
}

const StateBadge: React.FC<StateBadgeProps> = ({ content }) => {
  return <div css={badgeStyle(content)}>{content}</div>;
};

export default StateBadge;
