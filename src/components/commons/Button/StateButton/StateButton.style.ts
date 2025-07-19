import { css } from "@emotion/react";
import theme from "@styles/theme";
import { AnotherTaskStatus } from "types/taskStatus";

export const buttonStyle = css`
  display: flex;
  padding: 1.2rem 2rem;
  border-radius: 8px;
  background-color: ${theme.color.object.alternative};
  color: ${theme.color.object.hero};
  ${theme.font.caption3};
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.16);
  white-space: nowrap;
  cursor: pointer;
`;

export const selectedButtonStyle = (content: AnotherTaskStatus) => css`
  background-color: ${content === "진행 전"
    ? theme.color.accent.redBg
    : content === "진행 중"
    ? theme.color.accent.blueBg
    : theme.color.accent.greenBg};
  color: ${content === "진행 전"
    ? theme.color.accent.redFg
    : content === "진행 중"
    ? theme.color.point.assistive
    : theme.color.accent.greenFg};
`;
