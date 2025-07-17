import { AnotherTaskStatus } from "types/taskStatus";
import { badgeStyle, unselectedBadgeStyle } from "./StateBadge.style";

interface StateBadgeProps {
  type?: "display" | "select";
  content: AnotherTaskStatus;
  onClick?: (state: AnotherTaskStatus) => void;
  selectedState?: AnotherTaskStatus | null;
}

const StateBadge: React.FC<StateBadgeProps> = ({
  type = "display",
  content,
  onClick,
  selectedState,
}) => {
  return (
    <div
      css={
        type === "display" || selectedState === content
          ? badgeStyle(content, !!onClick || type === "select")
          : unselectedBadgeStyle
      }
      onClick={() => onClick?.(content)}
    >
      {content}
    </div>
  );
};

export default StateBadge;
