import theme from "@styles/theme";
import { css } from "@emotion/react";

export const container = css`
  padding: 4.5rem 8.2rem;
  width: 71.3rem;
  margin: 4.8rem auto;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 0.8rem;
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
  ${theme.font.body3};
  color: ${theme.color.base.darkgray};
  display: flex;
  align-items: center;
`;
export const contentHeader = css`
  gap: 1.6rem;
  ${theme.font.body2};
  color: ${theme.color.base.darkgray};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const describe = css`
  ${theme.font.caption3};
  color: ${theme.color.object.assistive};
  margin-bottom: 0.4rem;
`;

export const iconStyle = css`
  color: ${theme.color.point.hero};
`;

export const contentBody = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${theme.font.caption3};
  color: ${theme.color.object.assistive};
`;

export const categoryContainer = css`
  margin-top: 1.6rem;
  ${theme.font.caption3};
  color: ${theme.color.base.black};
  display: flex;
  justify-content: row;
  gap: 0.8rem;
`;

export const textStyle = css`
  width: 38rem;
  height: 5.2rem;
`;

export const categories = css`
  display: flex;
  justify-content: row;
  gap: 0.8rem;
`;

export const textareaWrapper = css`
  position: relative;
`;

export const textareaStyle = (isOverLimit: boolean) => css`
  width: 100%;
  height: 8.9rem;
  padding: 1.2rem 1.6rem;
  border-radius: 1.2rem;
  ${theme.font.caption3};
  font-family: "Pretendard";
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
      : theme.color.point.hero};
    outline: none;
  }
`;
export const charCountStyle = (isOverLimit: boolean) => css`
  position: absolute;
  bottom: 1.2rem;
  right: 1.6rem;
  ${theme.font.caption3};
  color: ${isOverLimit
    ? theme.color.feedback.negative
    : theme.color.base.darkgray};
`;

export const buttonContainer = css`
  display: flex;
  justify-content: center;
`;

export const buttonStyle = css`
  width: 54.9rem;
  padding: 1.6rem 2.4rem;
  border-radius: 8px;
  background-color: ${theme.color.point.hero};
  border: none;
  cursor: pointer;
`;
