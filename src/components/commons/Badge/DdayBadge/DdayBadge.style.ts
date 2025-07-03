import { css } from "@emotion/react";
import theme from "@styles/theme";

export const badgeStyle = css`
  display: inline-flex;
  padding: 0.5rem 1.1rem;
  justify-content: center;
  border-radius: 4px;
  background: ${theme.color.accent.redBg};
  color: ${theme.color.accent.redFg};
  ${theme.font.caption1};
  white-space: nowrap;
`