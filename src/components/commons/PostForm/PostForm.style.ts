import { css } from "@emotion/react";
import theme from "@styles/theme";

export const contentBody = css`
  padding: 6rem 10rem;
  box-shadow: 0px 4px 12px rgba(13, 10, 44, 0.06);
  border-radius: 32px;
  border: 1px solid ${theme.color.border.alternative};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;
`;

export const titleText = css`
  width: 70.8rem;
  height: 5.2rem;
  padding: 1.2rem 1.6rem;
`;

export const inputStyle = css`
  width: 70.8rem;
  padding: 1.2rem 1.6rem;
  ${theme.font.caption3}
  display: flex;
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

export const textareaStyle = css`
  ${theme.font.caption3};
  resize: none;
  width: 70.8rem;
  height: 34.9rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 8px;
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
`;

export const categories = css`
  display: flex;
  gap: 2.4rem;
`;
