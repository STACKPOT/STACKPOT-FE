import { css } from "@emotion/react";
import { spin } from "@styles/animation";
import theme from "@styles/theme";

export const background = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

export const modalStyle = css`
  width: 76rem;
  height: 36.6rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${theme.color.object.assistive};
  background-color: white;
`;

export const closeIconStyle = css`
  margin-left: auto;
  cursor: pointer;
`;
export const messageStyle = css`
  ${theme.font.title2};
  color: ${theme.color.point.gray};
  white-space: pre-wrap;
  margin-top: 0.8rem;
  padding: 0 1.6rem;
  align-self: flex-start;
`;

export const messageHightlightStyle = css`
  ${theme.font.title2};
  color: ${theme.color.point.hero};
`;

export const spinnerContainer = css`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  margin-top: 1.6rem;
`;
export const spinnerStyle = css`
  animation: ${spin} 1s linear infinite;
`;
