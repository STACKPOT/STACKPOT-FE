import { css } from "@emotion/react";
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
export const container = css`
  width: 54rem;
  padding: 3.2rem;
  background: ${theme.color.base.white};
  border: 0.1rem solid ${theme.color.object.alternative};
  border-radius: 2.4rem;
  display: inline-flex;
  flex-direction: column;
  gap: 1.6rem;
`;
export const closeIconStyle = css`
  margin-left: auto;
  cursor: pointer;
`;
export const titleStyle = css`
  color: ${theme.color.base.darkgray};
  ${theme.font.title1};
  text-align: center;
`;

export const messageStyle = css`
  color: ${theme.color.object.assistive};
  ${theme.font.caption3};
  text-align: center;
  white-space: pre-line;
`;
export const footer = css`
  margin-top: 1.6rem;
  display: flex;
  justify-content: center;
  gap: 3.2rem;
`;

export const button = (backgroundColor: string) => css`
  width: 19.4rem;
  height: 5rem;
  padding: 0.6rem 2.4rem;
  background: ${backgroundColor};
  color: ${theme.color.point.ivory};
  border-radius: 1.6rem;
  border: 0.1rem solid rgba(112, 115, 124, 0.2);
  ${theme.font.caption3};
  cursor: pointer;
`;
