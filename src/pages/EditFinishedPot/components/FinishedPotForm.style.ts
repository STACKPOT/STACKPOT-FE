import { css } from "@emotion/react";
import theme from "@styles/theme";

export const mainContainer = css`
  margin: 8.4rem auto;
`;

export const headContainer = css`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const titleStyle = css`
  ${theme.font.display1}
  color: ${theme.color.point.gray};
`;

export const iconStyle = css`
  color: ${theme.color.point.hero};
  width: 2.4rem;
  height: 2.2rem;
  margin-left: 0.8rem;
`;

export const submitButtonStyle = css`
  margin-left: auto;
`;

export const formContainer = css`
  margin-top: 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const inputStyle = css`
  margin-left: 4.4rem;
  padding: 1.2rem 1.6rem;
  ${theme.font.body3};
  display: flex;
  flex-grow: 1;
  border-radius: 8px;
  color: ${theme.color.base.black};
  border: 1px solid ${theme.color.object.alternative};
  &::placeholder {
    color: ${theme.color.object.hero};
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
  color: ${theme.color.point.gray};
  align-items: center;
  ${theme.font.caption3};
  white-space: pre;
`;

export const datepickerCContainer = css`
  margin-left: 3rem;
`;

export const textareaStyle = css`
  padding: 2.4rem;
  height: 40.6rem;
  border-radius: 8px;
  border: 1px solid ${theme.color.object.alternative};
  ${theme.font.body3}
  resize: none;
  color: ${theme.color.base.black};
  &::placeholder {
    color: ${theme.color.object.hero};
  }
  &:focus {
    border-color: ${theme.color.point.hero};
    outline: none;
  }
`;

export const summaryButtonContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
