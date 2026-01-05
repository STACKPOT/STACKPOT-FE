import { css } from "@emotion/react";
import theme from "@styles/theme";

export const statusContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3.2rem;
`;

export const boardTitleStyle = css`
  ${theme.font.display1};
  color: ${theme.color.point.gray};
`;

export const boardIconStyle = css`
  color: ${theme.color.point.hero};
`;
