import { AnotherTaskStatus } from "types/taskStatus";
import { potBadgeStyle, taskBadgeStyle } from "./StateBadge.style";
import { PotStatus } from "types/potStatus";
import { potStateMap } from "@constants/categories";

interface StateBadgeProps {
  badgeType: "task" | "pot";
  taskState?: AnotherTaskStatus;
  potState?: PotStatus;
  onClick?: () => void;
}

const StateBadge: React.FC<StateBadgeProps> = ({ badgeType, taskState, potState, onClick }) => {
  let badgeStyle;
  let potEmoji;
  let badgeContent;

  if (badgeType === "task") {
    if (!taskState) return null;
    badgeStyle = taskBadgeStyle(taskState, !!onClick);
    badgeContent = taskState;
  }
  else {
    if (!potState) return null;
    badgeStyle = potBadgeStyle(potState);
    badgeContent = potStateMap[potState];
    switch (potState) {
      case "ONGOING":
        potEmoji = "🙌"; break;
      case "COMPLETED":
        potEmoji = "🔥"; break;
      default:
        potEmoji = "💦";
    }
  }

  return (
    <div css={badgeStyle} onClick={onClick}>
      {badgeContent}
      {badgeType === "pot" && potEmoji}
    </div>
  );
};

export default StateBadge;
