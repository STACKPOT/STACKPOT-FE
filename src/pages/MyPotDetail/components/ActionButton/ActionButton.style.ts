import { css } from "@emotion/react";
import theme from "@styles/theme";

export const buttonContainer = css`
  display: flex;
  align-items: flex-start;
  gap: 4.8rem;
`;

export const baseButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  
  &:disabled {
    background: ${theme.color.object.alternative};
    color: ${theme.color.base.white};
    cursor: default;
  }
`;

export const saveButtonStyle = css`
  ${baseButtonStyle};
  padding: 1.6rem 24rem;
  border: 1px solid ${theme.color.object.alternative};
  background: ${theme.color.point.hero};
  color: ${theme.color.point.ivory};
`;

export const anotherSaveButtonStyle = css`
  ${baseButtonStyle};
  width: 19.4rem;
  height: 5rem;
  padding: 0.6rem 2.4rem;
  border: 1px solid ${theme.color.object.alternative};
  background: ${theme.color.point.hero};
  color: ${theme.color.point.ivory};
`;

export const deleteButtonStyle = css`
  ${baseButtonStyle};
  width: 19.4rem;
  height: 5rem;
  padding: 0.6rem 2.4rem;
  border: 1px solid ${theme.color.feedback.negative};
  background: ${theme.color.base.white};
  color: ${theme.color.feedback.negative};
  &:disabled {
    border: none;
  }
`;
  
export const buttonTextStyle = css`
  ${theme.font.captionBold1};
`;
