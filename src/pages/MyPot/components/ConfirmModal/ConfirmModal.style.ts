import { css } from "@emotion/react";
import theme from "@styles/theme";

export const mainContainer = css`
  display: flex;
  width: 54rem;
  padding: 3.2rem;
  flex-direction: column;
  align-items: center;
  background: ${theme.color.base.white};
  border-radius: 24px;
  border: 1px solid ${theme.color.object.alternative};
`;

export const innerContainer = css`
  display: flex;
  width: 47.6rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;

export const cancelContainer = css`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const cancelIconStyle = css`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
`;

export const warningTitleStyle = css`
  ${theme.font.title1};
  text-align: center;
  color: ${theme.color.base.darkgray};
`;

export const explainContentStyle = css`
  ${theme.font.caption3};
  text-align: center;
  color: ${theme.color.object.assistive};
`;

export const buttonContainer = css`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.6rem;
`;

export const getButtonStyle = (label: string) => css`
  display: flex;
  padding: 1.7rem ${label === "아니오" ? "7.6rem" : "9rem"};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid ${theme.color.border.normal};
  background: ${label === "아니오" ? theme.color.object.alternative : theme.color.point.hero}; 
  ${theme.font.captionBold1};
  color: ${theme.color.point.ivory}; 
  cursor: pointer;
`;
