import { AnotherTaskStatus } from "types/taskStatus";
import {
  potBadgeStyle,
  taskBadgeStyle,
  unselectedStyle,
} from "./StateBadge.style";
import { PotStatus } from "types/potStatus";
import { potStateMap } from "@constants/categories";
import { SerializedStyles } from "@emotion/react";

interface StateBadgeProps {
  badgeType: "task" | "pot";
  taskState?: AnotherTaskStatus;
  potState?: PotStatus;
  selected?: boolean;
  onClick?: () => void;
}

const StateBadge: React.FC<StateBadgeProps> = ({
  badgeType,
  taskState,
  potState,
  selected,
  onClick,
}) => {
  let badgeStyle: SerializedStyles | SerializedStyles[];
  let potEmoji;
  let badgeContent;

  if (badgeType === "task") {
    if (!taskState) return null;
    if (selected === false) {
      badgeStyle = [taskBadgeStyle(taskState, !!onClick), unselectedStyle];
    } else badgeStyle = taskBadgeStyle(taskState, !!onClick);
    badgeContent = taskState;
  } else {
    if (!potState) return null;
    badgeStyle = potBadgeStyle(potState);
    badgeContent = potStateMap[potState];
    switch (potState) {
      case "ONGOING":
        potEmoji = "🙌";
        break;
      case "COMPLETED":
        potEmoji = "🔥";
        break;
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
