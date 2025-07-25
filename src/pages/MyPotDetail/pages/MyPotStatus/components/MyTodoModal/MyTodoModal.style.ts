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
  margin: 3.2rem 0 1.6rem 0;
  justify-content: space-between;
  padding: 0 1.6rem;
`;

export const titleTextStyle = css`
  ${theme.font.title2};
  color: ${theme.color.point.gray};
`;

export const addTodoButtonStyle = css`
  ${theme.font.caption2}
  color: ${theme.color.base.white};
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.6rem;
  background: ${theme.color.point.hero};
  border-radius: 32px;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.04);
  &:disabled {
    background: ${theme.color.object.alternative};
    cursor: not-allowed;
    color: ${theme.color.object.hero};
  }
`;

export const eachTodoContainer = css`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  width: 100%;
  padding: 0 1.6rem;
`;

export const contentContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  height: 30.4rem;
  overflow-y: auto;
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
  background: ${theme.color.point.hero};
  padding: 1.7rem 0;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  bottom: 2.4rem;
  width: 52.1rem;
  margin: 0 1.5rem;
  &:disabled {
    background: ${theme.color.object.alternative};
    cursor: not-allowed;
  }
`;
