import { css } from "@emotion/react";
import theme from "@styles/theme";

export const WriteButton = (type: "feed" | "pot") => css`
  padding: ${type === "feed"
    ? "1.6rem 2.4rem 1.6rem 2rem"
    : "1.3rem 2.4rem 1.3rem 2rem"};
  background: ${theme.color.border.normal};
  border-radius: 5rem;
  align-items: center;
  display: flex;
  color: ${theme.color.point.alternative};
  ${theme.font.bodyBold1};
  gap: 0.4rem;
  cursor: pointer;
  position: fixed;
  top: 72.3rem;
  left: 127.7rem;
  animation-timing-function: ease-in;
  animation-duration: 300ms;

  &:hover {
    color: white;
    background-color: ${theme.color.point.normal};
  }
  &:active {
    color: white;
    background-color: ${theme.color.point.hero};
  }
`;

export const iconStyle = css`
  margin: 0.4rem;
`;
