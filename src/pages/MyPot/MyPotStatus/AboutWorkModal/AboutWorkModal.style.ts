import { css } from "@emotion/react";
import theme from "@styles/theme";

export const mainContainer = css`
  display: flex;
  padding: 3.2rem;
  flex-direction: column;
  align-items: flex-start;
  background: ${theme.color.base.white};
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 24px;
  width: 84rem;
  z-index: 5000;
`;

export const subContainer = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const cancelContainer = css`
  display: flex;
  padding: 0.8rem 0.4rem;
  justify-content: flex-end;
  align-self: center;
  width: 100%;
`;

export const cancelIconStyle = css`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

export const thirdContainer = css`
  display: flex;
  width: 65.3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
`;

export const titleContainer = css`
  display: flex;
  width: 100%;
  height: 2.8rem;
  justify-content: center;
  align-items: center;
`;

export const titleTextStyle = css`
  ${theme.font.title1};
  color: ${theme.color.base.darkgray};
`;

export const labelTextStyle = css`
  ${theme.font.caption3};
  color: ${theme.color.base.darkgray};
  white-space: nowrap;
`;