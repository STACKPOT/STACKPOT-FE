import { css } from "@emotion/react";
import theme from "@styles/theme";

export const saveButtonStyle = css`
  display: flex;
  width: 42.9rem;
  height: 5rem;
  padding: 0.6rem 0rem;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid ${theme.color.object.alternative};
  background: ${theme.color.point.hero};
  color: ${theme.color.point.ivory};
  cursor: pointer;
`;

export const buttonTextStyle = css`
  ${theme.font.captionBold1};
  font-family: inherit;
  border: none;
  outline: none;
  background-color: inherit;
  color: inherit;
`;

export const buttonContainer = css`
  display: flex;
  align-items: flex-start;
  gap: 4.8rem;
`;

export const anotherSaveButtonStyle = css`
  display: flex;
  width: 19.4rem;
  height: 5rem;
  padding 0.6rem 2.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid ${theme.color.object.alternative};
  background: ${theme.color.point.hero};
  color: ${theme.color.point.ivory};
  cursor: pointer;
`;

export const deleteButtonStyle = css`
  display: flex;
  width: 19.4rem;
  height: 5rem;
  padding 0.6rem 2.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid ${theme.color.feedback.negative};
  background: ${theme.color.base.white};
  color: ${theme.color.feedback.negative};
  cursor: pointer;
`;
