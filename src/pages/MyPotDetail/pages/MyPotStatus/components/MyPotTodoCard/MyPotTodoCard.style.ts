import { css } from "@emotion/react";
import theme from "@styles/theme";

export const cardStyle = (isFirst: boolean) => css`
  width: 27.3rem;
  padding: 2.4rem 0 1.6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: ${isFirst ? `${theme.color.point.normal}` : "white"};
`;

export const profileImageStyle = css`
  width: 7.2rem;
  height: 7.2rem;
  border: 0.1rem solid ${theme.color.object.alternative};
  border-radius: 50%;
  cursor: pointer;
`;

export const nicknameStyle = css`
  ${theme.font.caption3}
  color: ${theme.color.point.hero};
  margin: 1.6rem 0 0.8rem 0;
`;

export const todoListContainer = css`
  display: flex;
  flex-direction: column;
  height: 11.6rem;
  overflow-y: auto;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const todoContainer = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.7rem 5.4rem;
`;

export const checkBoxStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.1rem;
  height: 2.1rem;
  border: 0.1rem solid ${theme.color.interactive.inactive};
  border-radius: 0.6rem;
`;

export const todoTextStyle = css`
  ${theme.font.body3}
  color: ${theme.color.point.gray};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const plusButtonStyle = css`
  cursor: pointer;
  height: 1.9rem;
`;
