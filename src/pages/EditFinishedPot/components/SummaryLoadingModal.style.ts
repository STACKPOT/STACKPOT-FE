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
  width: 54rem;
  height: 33.9rem;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  border: 1px solid ${theme.color.object.alternative};
  background-color: white;
`

export const closeIconStyle = css`
  margin: 0.8rem 0.4rem 0.8rem auto;
  cursor: pointer;
`
export const messageStyle = css`
  ${theme.font.title1};
  color: ${theme.color.base.black};
  text-align: center;
  white-space: pre-wrap;
  margin-top: 1.2rem;
`
export const messageHightlightStyle = css`
  ${theme.font.title1};
  color: ${theme.color.point.hero};
`
export const spinnerContainer = css`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  margin-top: 3.2rem;
`
export const spinnerStyle = css`
  animation: ${spin} 1s linear infinite;
`