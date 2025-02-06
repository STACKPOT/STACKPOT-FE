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

export const entryButtonStyle = css`
  padding: 1.2rem 2.4rem;
  background-color: ${theme.color.point.hero};
  border-radius: 32px;
  ${theme.font.captionBold1};
`;

export const landingButtonStyle = css`
  padding: 2rem 4.3rem;
  background-color: ${theme.color.point.hero};
  border-radius: 32px;
  ${theme.font.title1};
`;

export const actionButtonStyle = (actionType?: "action" | "join") => css`
  padding: ${actionType === "join" ? "1.6rem 3.3rem" : "1.4rem 5.8rem"};
  border-radius: 8px;
  ${theme.font.captionBold1};
`;
