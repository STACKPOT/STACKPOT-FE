import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  padding: 3.2rem 0;
  overflow: hidden;
  gap: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const content = css`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const contentHeader = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const iconStyle = css`
  color: ${theme.color.point.hero};
`;
