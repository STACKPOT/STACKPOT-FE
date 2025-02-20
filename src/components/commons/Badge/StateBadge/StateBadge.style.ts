import { css } from "@emotion/react";
import theme from "@styles/theme";
import { AnotherTaskStatus } from "types/taskStatus";

export const badgeStyle = (content: AnotherTaskStatus, clickable: boolean = false) => css`
  display: flex;
  padding: 1.2rem 2.4rem;
  border-radius: 8px;
  border: 1px solid ${theme.color.border.normal};
  background-color: ${
    content === "진행 전"
      ? theme.color.feedback.negative_transparent
      : content === "진행 중"
      ? theme.color.feedback.positive_transparent
      : theme.color.feedback.positive_blue_transparent
  };
  color: ${theme.color.point.navy};
  ${theme.font.captionBold1};
  cursor: ${clickable ? "pointer" : "default"};
`;
