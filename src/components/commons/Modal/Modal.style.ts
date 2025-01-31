import { css } from "@emotion/react";
import theme from "@styles/theme";

export const background = css`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.40);
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
`
export const titleStyle = css`
  color: ${theme.color.base.darkgray};
  ${theme.font.title1};
  text-align: center;
`;

export const messageStyle = css`
  color: ${theme.color.object.assistive};
  ${theme.font.caption3};
  text-align: center;
`;
export const footer = css`
  display: flex;
  justify-content: center;
  gap: 1.6rem;
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
