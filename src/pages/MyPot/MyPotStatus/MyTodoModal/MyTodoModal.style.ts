import theme from "@styles/theme";
import { css } from "@emotion/react";

export const container = css`
  display: flex;
  padding: 3.2rem;
  align-items: center;
  border-radius: 24px;
  background: ${theme.color.base.white};
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04);
  border: 1px solid ${theme.color.object.alternative}
`

export const innerContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`

export const titleContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 22rem;
`

export const titleTextStyle = css`
  ${theme.font.title1};
  color: ${theme.color.base.darkgray};
`

export const cancelIconStyle = css`
  width: 1.7rem;
  height: 1.7rem;
  cursor: pointer;
`

export const buttonStyle = css`
  display: flex;
  align-items: center;
  padding: 0.2rem 1.2rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 16px;
  cursor: pointer;
`

export const buttonContainer = css`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const buttonTextStyle = css`
  ${theme.font.caption2}
  ${theme.color.point.navy};
  font-family: inherit; 
  border: none;
  outline: none;
  background-color: inherit ;
  cursor: pointer;
  color: inherit;
`
