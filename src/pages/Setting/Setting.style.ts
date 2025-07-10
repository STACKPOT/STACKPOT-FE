import theme from "@styles/theme";
import { css } from "@emotion/react";

export const container = css`
  width: 78.1rem;
  padding: 4.1rem 5rem;
  box-sizing:border-box;
  margin: 8.4rem auto;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 8px;
`;

export const detailContainer = css`
  gap: 3.2rem;
  display: flex;
  flex-direction: column;
  margin: 4.4rem 0;
`;
export const content = (larger: boolean) => css`
  display: flex;
  flex-direction: column;
  gap: ${larger ? "0.8rem" : ""};
`;

export const titleContent = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  border-bottom: 1px solid ${theme.color.object.alternative};
`;

export const title = css`
  ${theme.font.title3};
  color: ${theme.color.point.gray};
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
export const contentHeader = css`
  ${theme.font.title1};
  gap: 1.6rem;
  color: ${theme.color.point.gray};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const describe = css`
  ${theme.font.body3};
  color: ${theme.color.object.hero};
  margin-bottom: 0.8rem;
`;

export const iconStyle = css`
  color: ${theme.color.point.hero};
`;

export const contentBody = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${theme.font.body3};
  color: ${theme.color.object.hero};
`;

export const textStyle = css`
  height: 5.2rem;
`;

export const textareaWrapper = css`
  position: relative;
`;

export const textareaStyle = (isOverLimit: boolean) => css`
  ${theme.font.body2};
  width: 100%;
  height: 8.9rem;
  padding: 1.4rem 1.6rem;
  border-radius: 8px;
  resize: none;
  border: 1px solid
    ${isOverLimit
    ? theme.color.feedback.negative
    : theme.color.border.alternative};

  &::placeholder {
    color: ${theme.color.object.hero};
    ${theme.font.caption3};
  }

  &:focus {
    border-color: ${isOverLimit
    ? theme.color.feedback.negative
    : theme.color.point.alternative};
    outline: none;
  }
`;

export const charCountStyle = (isOverLimit: boolean) => css`
  position: absolute;
  bottom: 1.2rem;
  right: 1.6rem;
  ${theme.font.body2};
  color: ${isOverLimit
    ? theme.color.feedback.negative
    : theme.color.object.hero};
`;

export const buttonContainer = css`
  display: flex;
  justify-content: center;
`;

export const buttonStyle = css`
  ${theme.font.title1};
  width: 100%;
  border-radius: 8px;
  background-color: ${theme.color.point.hero};
  border: none;
`;

export const nicknameText = css`
  color: ${theme.color.point.hero};
`