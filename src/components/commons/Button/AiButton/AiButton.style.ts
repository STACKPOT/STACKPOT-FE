import { css } from "@emotion/react";
import theme from "@styles/theme";

export const buttonStyle = css`
  display: flex;
  align-items: center;
  padding: 1.4rem 1.9rem;
  gap: 1rem;
  border-radius: 8px;
  background: linear-gradient(
    to right,
    ${theme.color.point.alternative},
    ${theme.color.accent.greenBg}
  );
  color: ${theme.color.point.assistive};
  ${theme.font.caption3};
  &:hover {
    color: ${theme.color.point.alternative};
  }
  transition: color 0.3s ease-out;
  cursor: pointer;
`;

export const iconStyle = css`
  color: ${theme.color.point.assistive};
`;
