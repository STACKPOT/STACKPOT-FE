import { css } from "@emotion/react";
import theme from "@styles/theme";

export const mainContainer = css`
  margin: 4.8rem auto;
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
  margin-top: 3.2rem;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const inputStyle = css`
  margin-left: 4.4rem;
  padding: 1.2rem 1.6rem;
  ${theme.font.caption3};
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
  width: 100%;
`;

export const labelStyle = css`
  display: flex;
  color: ${theme.color.base.darkgray};
  align-items: center;
  ${theme.font.caption3};
  white-space: pre;
`;

export const dividerStyle = css`
  height: 1px;
  width: 100%;
  background-color: ${theme.color.object.alternative};
`;


export const textareaStyle = css`
  padding: 2.4rem;
  height: 40.6rem;
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

export const summaryButtonContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const appealIconStyle = css`
  width: 1.4rem;
  height: 1.4rem;
`