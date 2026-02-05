import { css } from "@emotion/react";
import theme from "@styles/theme";

export const buttonStyle = css`
  padding: 1rem;
  border-radius: 50%;
  border: none;
  background-color: ${theme.color.point.normal};
  height: 4.4rem;
`;

export const iconStyle = css`
  transform: scaleX(-1);
`;

export const paginationTextStyle = css`
  ${theme.font.caption3};
  color: ${theme.color.point.gray};
`;

export const paginationContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
`;
