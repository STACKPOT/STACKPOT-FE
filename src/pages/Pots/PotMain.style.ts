import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 8.4rem 0;
`;

export const tabsContainer = css`
  display: flex;
`;

export const tabsTextStyle = css`
  ${theme.font.title2};
  color: ${theme.color.object.hero};
  padding: 1.2rem 3rem;
  text-decoration: none;
  transition: color 0.3s ease-out;

  &:hover,
  &.active {
    color: ${theme.color.point.hero};
  }
`;
