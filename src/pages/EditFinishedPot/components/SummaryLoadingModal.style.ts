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
  align-items: flex-start;
  padding-top: 7.8rem;
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
  margin-left: auto;
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
    justify-content: center;
    align-items: center;
    margin-top: 3.2rem;
`