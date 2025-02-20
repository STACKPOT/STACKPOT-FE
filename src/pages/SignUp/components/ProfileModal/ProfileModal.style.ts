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
  gap: 1.2rem;
  width: 42.1rem;
  margin-top: 2.4rem;
`;

export const inputStyle = (hasValue: boolean) => css`
  padding: 1rem 1.3rem;
  border-radius: 7px;
  display: flex;
  flex-grow: 1;
  outline: none;
  color: ${theme.color.point.hero};
  border: 1px solid ${hasValue
    ? theme.color.point.hero
    : theme.color.interactive.inactive};
  ${theme.font.caption2};
  &::placeholder{
    color: ${theme.color.interactive.inactive};
  }
`;

export const buttonStyle = css`
  padding: 1.6rem;
  border-radius: 8px;
  ${theme.font.caption1};
`;
