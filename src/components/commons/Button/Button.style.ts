import { css } from "@emotion/react";
import theme from "@styles/theme";

export const buttonStyle = css`
  border: none;
  cursor: pointer;
  color: white;
  background-color: ${theme.color.point.hero};
  transition: all 0.3s ease-out;
  &:hover {
    background-color: ${theme.color.point.alternative};
  }
  &:disabled {
    background-color: ${theme.color.object.alternative};
    cursor: not-allowed;
    color: ${theme.color.interactive.inactive};
  }
`;

export const negButtonStyle = css`
  color: ${theme.color.status.negative};
  border: 1px solid ${theme.color.accent.redBg};
  background-color: white;
  &:hover {
    background-color: ${theme.color.accent.redBg};
  }
`;

export const altButtonStlye = css`
  color: ${theme.color.point.gray};
  border: 1px solid ${theme.color.object.assistive};
  background-color: white;
  &:hover {
    background-color: ${theme.color.object.normal};
  }
`;

export const ctaButtonStyle = css`
  padding: 1.1rem 1.6rem;
  background-color: ${theme.color.point.hero};
  border-radius: 32px;
  ${theme.font.caption2};
  transition: background-color 0.2s ease-out;
  &:hover {
    color: ${theme.color.point.alternative};
    background-color: ${theme.color.accent.blueBg};
  }
`;

export const landingButtonStyle = css`
  padding: 2rem 4.3rem;
  background-color: ${theme.color.point.hero};
  border-radius: 32px;
  ${theme.font.title1};
`;

export const actionButtonStyle = (actionType?: "basic" | "neg" | "alt") => css`
  padding: 1.4rem 1.9rem;
  border-radius: 8px;
  ${theme.font.caption3};
  white-space: pre;
  ${(actionType === "neg" && negButtonStyle) ||
  (actionType === "alt" && altButtonStlye)};
  &:disabled {
    background-color: ${theme.color.object.alternative};
    color: ${theme.color.object.hero};
  }
`;

export const fullButtonStyle = (actionType?: "basic" | "neg" | "alt") => css`
  ${actionButtonStyle(actionType)};
  padding: 1.7rem 0;
  ${theme.font.title1};
`;
