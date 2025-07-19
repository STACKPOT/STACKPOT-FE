import { css } from "@emotion/react";
import theme from "@styles/theme";

export const contentBody = css`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const labelContainer = css`
  ${theme.font.caption3}
  display: flex;
  align-items: center;
`;

export const titleLabelContainer = css`
  ${theme.font.caption3}
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const inputStyle = css`
  padding: 1.2rem 1.6rem;
  ${theme.font.body3}
  display: flex;
  border-radius: 8px;
  border: 1px solid ${theme.color.object.alternative};
  &::placeholder {
    color: ${theme.color.object.hero};
  }
  &:focus {
    border-color: ${theme.color.point.hero};
    outline: none;
  }
`;

export const titleCountStyle = css`
  ${theme.font.body3}
  color: ${theme.color.object.hero};
  margin-left: auto;
`;

export const textareaStyle = css`
  ${theme.font.body3};
  resize: none;
  min-height: 34rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 8px;
  padding: 2.4rem;
  &::placeholder {
    color: ${theme.color.object.hero};
    ${theme.font.body3};
  }
  &:focus {
    border-color: ${theme.color.point.hero};
    outline: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const categoryContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const buttons = (type: "series" | "category" | "interest") => css`
  gap: 0.8rem;
  display: flex;
  margin-left: ${type === "series"
    ? "2.4rem"
    : type === "category"
    ? "0.8rem"
    : "2rem"};
`;
