import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  margin: 4.8rem 0;
  display: flex;
  flex-direction: column;
`;
export const toastStyle = css`
  transform: translate(-50%);
  top: 8.3rem;
  position: absolute;
  left: 50%;
`;

export const contentContainer = css`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const contentTitle = css`
  ${theme.font.bodyBold2};
  color: ${theme.color.base.darkgray};
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const iconStyle = css`
  color: ${theme.color.point.hero};
  width: 2.4rem;
  height: 2.2rem;
`;

export const buttonContainer = css`
  display: flex;
  gap: 2.2rem;
  margin-left: auto;
`;
