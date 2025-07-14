import { css } from "@emotion/react";
import theme from "@styles/theme";

export const editCommentContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 0.8rem 2.1rem 3.2rem 2.1rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 8px;
  background-color: white;
`;
export const editCommentTextAreaStyle = css`
  border: none;
  ${theme.font.body3};
  resize: none;

  &:focus {
    outline: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const nicknameStyle = css`
  ${theme.font.caption3};
  color: ${theme.color.point.hero};
  cursor: pointer;
`;

export const submitButtonContainer = css`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: end;
`;

export const recommentCancelStyle = css`
  ${theme.font.caption3};
  color: ${theme.color.point.hero};
  background-color: transparent;
`;
