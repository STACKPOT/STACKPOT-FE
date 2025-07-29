import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  width: 1062px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  padding: 4.8rem 0;
`;

export const headerStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const textStyle = css`
  ${theme.font.title3};
  color: ${theme.color.point.hero};
`;

export const iconStyle = css`
  width: 4rem;
  height: 4rem;
  color: ${theme.color.object.hero};
`;

export const tabsContainer = css`
  display: flex;
  align-items: flex-start;
  gap: 3.2rem;
  align-self: stretch;
`;

export const navLinkStyle = (isActive: boolean) => css`
  color: ${isActive
    ? theme.color.point.hero
    : theme.color.interactive.inactive};
  text-decoration: none;
  padding: 1.2rem 3rem;
  ${theme.font.title2};
  &:hover {
    color: ${theme.color.point.hero};
  }
`;
