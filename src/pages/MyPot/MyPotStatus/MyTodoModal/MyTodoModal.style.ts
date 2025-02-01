import theme from "@styles/theme";
import { css } from "@emotion/react";

export const container = css`
  display: flex;
  padding: 3.2rem;
  align-items: center;
  border-radius: 24px;
  background: ${theme.color.base.white};
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04);
  border: 1px solid ${theme.color.object.alternative};
`;

export const innerContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

export const titleContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 22rem;
`;

export const titleTextStyle = css`
  ${theme.font.title1};
  color: ${theme.color.base.darkgray};
`;

export const cancelIconStyle = css`
  width: 1.7rem;
  height: 1.7rem;
  cursor: pointer;
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
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const buttonTextStyle = css`
  ${theme.font.caption2}
  color: ${theme.color.base.white};
  font-family: inherit; 
  border: none;
  outline: none;
  background-color: inherit;
  cursor: pointer;
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

export const noTaskTextContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const noneTodoTextStyle = css`
  ${theme.font.caption3};
  color: #989BA2;
  width: 100%;
`;

export const saveButtonStyle = css`
  background: ${theme.color.point.hero};
  padding: 1.6rem 3.2rem;
  border-radius: 24px;
`;
