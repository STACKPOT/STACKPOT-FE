import { badgeStyle } from "./StateBadge.style";
import theme from "@styles/theme";

interface StateBadgeProps {
  content: "진행 전" | "진행 중" | "완료";
}

const StateBadge: React.FC<StateBadgeProps> = ({ content }: StateBadgeProps) => {
  const color =
    content === "진행 전"
      ? theme.color.feedback.negative_transparent
      : content === "진행 중"
      ? theme.color.feedback.positive_transparent
      : theme.color.feedback.positive_blue_transparent;

  return <div css={badgeStyle(color)}>{content}</div>;
};

export default StateBadge;
