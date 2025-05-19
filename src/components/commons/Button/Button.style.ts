import { css } from "@emotion/react";
import theme from "@styles/theme";

export const buttonStyle = css`
  border: none;
  cursor: pointer;
  color: white;
  background-color: ${theme.color.point.hero};
  &:hover {
    background-color: ${theme.color.point.assistive};
  }
  &:disabled {
    background-color: ${theme.color.object.alternative};
    cursor: not-allowed;
    color: ${theme.color.interactive.inactive};
  }
`;

export const ctaButtonStyle = css`
  padding: 1.1rem 1.6rem;
  background-color: ${theme.color.point.hero};
  border-radius: 32px;
  ${theme.font.caption2};
  transition: background-color 0.2s ease-out;
  &:hover{
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

export const actionButtonStyle = (actionType?: "action" | "join" | "edit") => css`
  padding: ${(actionType === "join" && "1.6rem 3.3rem") || (actionType === "edit" && "1.2rem 2.4rem ") || "1.4rem 5.8rem"};
  border-radius: 8px;
  ${theme.font.bodyBold1};
`;
