import theme from "@styles/theme";
import { css } from "@emotion/react";

export const container = css`
  padding: 4.8rem 0;
  gap: 3.2rem;
  display: flex;
  flex-direction: column;
`;

export const content = css`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const contentHeader = css`
  display: flex;
  gap: 1.6rem;
  ${theme.font.bodyBold2};
  color: ${theme.color.base.darkgray};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const iconStyle = css`
  color: ${theme.color.point.hero};
`;

export const contentBody = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;
`;

export const profileStyle = css`
  height: 9.2rem;
`;
