import { css } from "@emotion/react";
import theme from "@styles/theme";
import { AnotherTaskStatus } from "types/taskStatus";

export const badgeContainer = css`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const badgeStyle = css`
  display: flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${theme.color.object.alternative};
  background: ${theme.color.object.alternative};
  ${theme.font.captionBold1};
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
`;

export const selectedBadgeStyle = (color: string) => css`
  background: ${color};
  display: flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${theme.color.object.alternative};
  ${theme.font.captionBold1};
`;


export const statusStyles: Record<AnotherTaskStatus, string> = {
  "진행 전": theme.color.feedback.negative_transparent,
  "진행 중": theme.color.feedback.positive_transparent,
  "완료": theme.color.feedback.positive_blue_transparent,
};
