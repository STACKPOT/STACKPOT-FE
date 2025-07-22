import theme from "@styles/theme";
import { css } from "@emotion/react";

export const container = css`
  display: flex;
  padding: 2.4rem;
  border-radius: 8px;
  background: ${theme.color.base.white};
  border: 1px solid ${theme.color.object.alternative};
  flex-direction: column;
  position: relative;
  width: 60rem;
  height: 53.2rem;
`;

export const cancelIconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
`;

export const titleContainer = css`
  display: flex;
  margin-top: 3.2rem;
  justify-content: space-between;
  padding: 0 1.6rem;
`;

export const titleTextStyle = css`
  ${theme.font.title2};
  color: ${theme.color.point.gray};
`;

export const buttonStyle = css`
  display: flex;
  align-items: center;
  padding: 0.6rem 1.6rem;
  border-radius: 16px;
  cursor: pointer;
  background: ${theme.color.point.alternative};

  &.max-tasks {
    background-color: ${theme.color.object.alternative};
  }
`;

export const buttonContainer = css`
  ${theme.font.caption2}
  color: ${theme.color.base.white};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const eachTodoContainer = css`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const todoContainer = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
  width: 100%;
  height: 29.5rem;
  max-height: 29.5rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  &.empty {
    justify-content: center;
    text-align: center;
  }
`;

export const noneTodoTextContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const noneTodoTextStyle = css`
  ${theme.font.caption3};
  color: ${theme.color.object.hero};
`;

export const saveButtonStyle = css`
  ${theme.font.caption2}
  color: ${theme.color.base.white};
  align-items: center;
  width: 100%;
  background: ${theme.color.point.hero};
  padding: 1.6rem 3.2rem;
  border-radius: 24px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: inherit;

  &:disabled {
    background: ${theme.color.object.alternative};
    cursor: not-allowed;
  }
`;
