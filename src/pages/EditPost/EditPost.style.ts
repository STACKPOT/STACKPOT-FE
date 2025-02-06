import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  margin: 4.8rem 0;
  display: flex;
  flex-direction: column;
`;
export const toastStyle = css`
  transform: translate(-50%);
  top: 8.3rem;
  position: absolute;
  left: 50%;
`;

export const contentContainer = css`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const contentTitle = css`
  ${theme.font.bodyBold2};
  color: ${theme.color.base.darkgray};
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const iconStyle = css`
  color: ${theme.color.point.hero};
  width: 2.4rem;
  height: 2.2rem;
`;

export const buttonContainer = css`
  display: flex;
  gap: 2.2rem;
  margin-left: auto;
`;

export const contentBody = css`
  padding: 6rem 10rem;
  box-shadow: 0px 4px 12px rgba(13, 10, 44, 0.06);
  border-radius: 3.2rem;
  border: 1px solid ${theme.color.border.alternative};
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;
`;

export const inputStyle = css`
  width: 70.8rem;
  padding: 1.2rem 1.6rem;
  ${theme.font.caption3};
  display: flex;
  flex-grow: 1;
  border-radius: 8px;
  color: ${theme.color.base.darkgray};
  border: 1px solid ${theme.color.object.alternative};
  &::placeholder {
    color: ${theme.color.interactive.inactive};
    ${theme.font.caption3};
  }
  &:focus {
    border-color: ${theme.color.point.hero};
    outline: none;
  }
`;

export const textareaStyle = css`
  ${theme.font.caption3};
  resize: none;
  width: 70.8rem;
  height: 34.9rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 0.8rem;
  box-sizing: border-box;
  overflow: auto;
  padding: 2.4rem;

  &::placeholder {
    color: ${theme.color.object.hero};
    ${theme.font.caption3};
  }

  &:focus {
    border-color: ${theme.color.point.hero};
    outline: none;
  }
`;

export const categoryContainer = css`
  ${theme.font.caption3};
  color: ${theme.color.base.darkgray};
  gap: 3rem;
  display: flex;
  flex-direction: row;
`;

export const categories = css`
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
`;
