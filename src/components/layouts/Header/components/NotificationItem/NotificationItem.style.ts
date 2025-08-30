import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  cursor: pointer;
`;

export const titleStyle = css`
  ${theme.font.caption2}
  color: ${theme.color.point.hero};
`;

export const bodyStyle = css`
  ${theme.font.body2}
`;

export const dateStyle = css`
  ${theme.font.body2}
  color: ${theme.color.object.hero};
`;
