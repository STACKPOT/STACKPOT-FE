import { css } from "@emotion/react";
import theme from "@styles/theme";

export const profileContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const modalStyle = css`
  width: 60rem;
`;

export const profileStyle = css`
  width: 6.4rem;
  height: 6.4rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 50%;
`;
export const contentStyle = css`
  ${theme.font.body3};
  color: ${theme.color.point.gray};
  text-align: center;
`;

export const imageStyle = css`
  width: 6.4rem;
  height: 6.4rem;
  margin-bottom: 0.8rem;
`;

export const inputContainer = css`
  display: flex;
  gap: 1.2rem;
  width: 100%;
  margin-top: 1.6rem;
`;
export const nicknameInputContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0.7rem;
  gap: 0.4rem;
`;

export const supportingTextStyle = (type: "error" | "complete") => css`
  ${theme.font.body2};
  color: ${type === "error"
    ? theme.color.status.negative
    : theme.color.status.positive};
`;

export const inputStyle = (hasValue: boolean) => css`
  padding: 1rem 1.3rem;
  border-radius: 7px;
  display: flex;
  flex-grow: 1;
  outline: none;
  color: ${theme.color.point.hero};
  border: 1px solid
    ${hasValue ? theme.color.point.hero : theme.color.interactive.inactive};
  ${theme.font.body3};
  &::placeholder {
    color: ${theme.color.object.hero};
  }
`;

export const buttonStyle = css`
  padding: 1.4rem 1.9rem;
  border-radius: 8px;
  ${theme.font.caption3};
`;
