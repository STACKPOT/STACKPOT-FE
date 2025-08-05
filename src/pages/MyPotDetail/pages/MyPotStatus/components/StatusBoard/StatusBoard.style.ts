import { css } from "@emotion/react";
import theme from "@styles/theme";

export const statusBoardContainer = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const iconStyle = css`
  color: ${theme.color.point.hero};
`;

export const statusBoardStyle = css`
  gap: 1.6rem;
  display: flex;
  align-items: center;
`;

export const statusTextStyle = css`
  ${theme.font.display1};
  color: ${theme.color.point.gray};
`;
