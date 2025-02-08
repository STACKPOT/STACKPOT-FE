import { css } from "@emotion/react";
import theme from "@styles/theme";

export const mainContainer = css`
  margin-top: 4.8rem;
`;

export const headContainer = css`
  display: flex;
  justify-content: space-between;
`;

export const titleStyle = css`
  ${theme.font.bodyBold2}
  color: ${theme.color.base.darkgray};
`;

export const titleContainer = css`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

export const iconStyle = css`
  color: ${theme.color.point.hero};
  width: 2.4rem;
  height: 2.4rem;
`;

export const formContainer = css`
  padding: 3.6rem 10rem;
  border: 1px solid ${theme.color.object.alternative};
  margin: 3.2rem 0 4.8rem 0;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const inputStyle = css`
  margin-left: 4.4rem;
  padding: 1.2rem 1.6rem;
  ${theme.font.caption3}
  font-family: "Pretendard";
  display: flex;
  flex-grow: 1;
  border-radius: 8px;
  color: ${theme.color.base.darkgray};
  border: 1px solid ${theme.color.object.alternative};
  &::placeholder {
    color: ${theme.color.interactive.inactive};
  }
  &:focus {
    border-color: ${theme.color.point.hero};
    outline: none;
  }
`;

export const languageInputStyle = css`
  margin-left: 3rem;
`;

export const labelStyle = css`
  display: flex;
  color: ${theme.color.base.darkgray};
  align-items: center;
  ${theme.font.caption3}
`;

export const dividerStyle = css`
  height: 1px;
  width: 100%;
  background-color: ${theme.color.object.alternative};
`;

export const buttonContainer = css`
  display: flex;
  gap: 2.4rem;
  margin-left: 3rem;
`;

export const textareaStyle = css`
  padding: 2.4rem;
  height: 40.6rem;
  font-family: "Pretendard";
  border-radius: 12px;
  border: 1px solid ${theme.color.object.alternative};
  ${theme.font.caption3}
  resize: none;
  color: ${theme.color.base.darkgray};
  &::placeholder {
    color: ${theme.color.object.hero};
  }
  &:focus {
    border-color: ${theme.color.point.hero};
    outline: none;
  }
`;

export const partStyle = css`
  display: flex;
  color: ${theme.color.base.darkgray};
  ${theme.font.caption3};
  gap: 3rem;
`;
