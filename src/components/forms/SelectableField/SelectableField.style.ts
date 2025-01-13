/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  align-items: center;
  width: 76rem; 
  height: 6.4rem;
  padding: 1.2rem 1.6rem; 
  border: 0.1rem solid ${theme.color.object.alternative};
  border-radius: 8px; 
  background-color: ${theme.color.base.white};
  box-sizing: border-box;
`;

export const label = css`
  ${theme.font.caption3};
  margin-right: 2rem; 
`;

export const radioGroup = css`
  display: flex;
  align-items: center;
  gap: 2rem; 
`;

export const radioLabel = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
`;

export const radioText = css`
  ${theme.font.caption2}; 
`;

export const radioCircle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2rem; 
  height: 2rem; 
  border: 0.2rem solid ${theme.color.object.alternative}; 
  border-radius: 50%; 
  background-color: ${theme.color.object.normal}; 
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease;
`;

export const active = css`
  background-color: ${theme.color.point.normal}; 
  border: 0.4rem solid ${theme.color.point.hero}; 

`;

export const radioInput = css`
  display: none; 
`;
