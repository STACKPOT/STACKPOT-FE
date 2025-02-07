import { css } from "@emotion/react";
import theme from "@styles/theme";

export const profileContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
`;
export const profileStyle = css`
  width: 6.4rem;
  height: 6.4rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 50%;
`;
export const contentStyle = css`
  ${theme.font.caption2};
  color: ${theme.color.object.assistive};
  text-align: center;
`;

export const inputContianer = css`
  display: flex;
  gap: 1.6rem;
  width: 100%;
`;

export const inputStyle = css`
  padding: 1rem 1.4rem;
  border-radius: 8px;
  display: flex;
  flex-grow: 1;
`;

export const buttonStyle = css`
  padding: 1.6rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  ${theme.font.caption1};
`;
