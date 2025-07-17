import { css } from "@emotion/react";
import theme from "@styles/theme";
import { AnotherTaskStatus } from "types/taskStatus";

export const unselectedBadgeStyle = css`
  display: flex;
  padding: 1.2rem 2rem;
  border-radius: 8px;
  background: ${theme.color.object.alternative};
  ${theme.font.caption3};
  color: ${theme.color.object.hero};
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
`;

export const badgeStyle = (
  state: AnotherTaskStatus,
  clickable: boolean = false
) => css`
  ${unselectedBadgeStyle};
  background-color: ${state === "진행 전"
    ? theme.color.accent.redBg
    : state === "진행 중"
    ? theme.color.accent.blueBg
    : theme.color.accent.greenBg};
  color: ${state === "진행 전"
    ? theme.color.accent.redFg
    : state === "진행 중"
    ? theme.color.point.assistive
    : theme.color.accent.greenFg};
  cursor: ${clickable ? "pointer" : "default"};
`;
