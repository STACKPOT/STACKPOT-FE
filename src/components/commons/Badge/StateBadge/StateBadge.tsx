import { AnotherTaskStatus } from "types/taskStatus";
import { badgeStyle } from "./StateBadge.style";

interface StateBadgeProps {
  content: AnotherTaskStatus;
  onClick?: () => void;
}

const StateBadge: React.FC<StateBadgeProps> = ({ content, onClick }) => {
  return (
    <div css={badgeStyle(content, !!onClick)} onClick={onClick}>
      {content}
    </div>
  );
};

export default StateBadge;
