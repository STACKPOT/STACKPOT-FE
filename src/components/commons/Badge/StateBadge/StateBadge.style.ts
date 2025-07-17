import { css } from "@emotion/react";
import theme from "@styles/theme";
import { PotStatus } from "types/potStatus";
import { AnotherTaskStatus } from "types/taskStatus";

export const taskBadgeStyle = (
  content: AnotherTaskStatus,
  clickable = false
) => css`
  display: flex;
  padding: 1.2rem 2rem;
  border-radius: 8px;
  background-color: ${content === "진행 전"
    ? theme.color.accent.redBg
    : content === "진행 중"
    ? theme.color.accent.yellowBg
    : theme.color.accent.greenBg};
  color: ${content === "진행 전"
    ? theme.color.accent.redFg
    : content === "진행 중"
    ? theme.color.accent.pinkFg
    : theme.color.status.positive};
  ${theme.font.captionBold1};
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.16);
  white-space: nowrap;
  cursor: ${clickable ? "pointer" : "default"};
`;

export const potBadgeStyle = (type: PotStatus) => css`
  display: flex;
  gap: 0.4rem;
  padding: 1rem 1.1rem;
  border-radius: 4px;
  background-color: ${type === "ONGOING"
    ? theme.color.accent.yellowBg
    : type === "COMPLETED"
    ? theme.color.accent.pinkBg
    : theme.color.accent.blueBg};
  color: ${type === "ONGOING"
    ? theme.color.accent.yellowFg
    : type === "COMPLETED"
    ? theme.color.accent.pinkFg
    : theme.color.point.darkblue};
  ${theme.font.caption1};
  white-space: nowrap;
`;
