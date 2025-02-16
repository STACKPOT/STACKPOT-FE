import { css } from "@emotion/react";
import theme from "@styles/theme";

export const modalBackgroundStyle = css`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;
export const containerStyle = css`
  width: 54rem;
  padding: 3.2rem;
  border-radius: 24px;
  border: 1px solid ${theme.color.object.alternative};
  background-color: ${theme.color.base.white};
  display: flex;
  flex-direction: column;
`;
export const closeButtonStyle = css`
  margin-left: auto;
  cursor: pointer;
`;
export const contentButtonContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;
`;
export const titleContentContainerStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;
export const titleStyle = css`
  ${theme.font.title1}
  color: ${theme.color.base.darkgray};
  white-space: pre-wrap;
  text-align: center;
  padding-top: 1.6rem;
`;

export const subtitleStyle = css`
  ${theme.font.caption3}
  color: black;
  white-space: pre-wrap;
  text-align: center;
  color: ${theme.color.object.assistive};
`;
export const buttonStyle = css`
  height: 5rem;
  width: 42.9rem;
  ${theme.font.captionBold1}
  color: ${theme.color.base.white};
  background-color: ${theme.color.point.hero};
  border-radius: 16px;
  border: 1px solid ${theme.color.border.normal};
  &:disabled {
    background-color: ${theme.color.object.alternative};
    cursor: not-allowed;
    color: ${theme.color.interactive.inactive};
  }
`;
export const deleteButtonStyle = css`
  ${buttonStyle};
  padding: 1.7rem 12rem;
  width: auto;
  border-color: ${theme.color.feedback.negative};
  color: ${theme.color.feedback.negative};
  background-color: white;
`;
