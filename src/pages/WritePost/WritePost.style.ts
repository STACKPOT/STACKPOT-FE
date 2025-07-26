import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  margin-top: 8.4rem;
  display: flex;
  flex-direction: column;
`;

export const contentStyle = css`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`;

export const contentTitle = css`
  ${theme.font.display1};
  color: ${theme.color.point.gray};
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const backIconStyle = css`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
`;

export const iconStyle = css`
  color: ${theme.color.point.hero};
  width: 2.4rem;
  height: 2.2rem;
`;

export const buttonContainer = css`
  margin-left: auto;
`;
