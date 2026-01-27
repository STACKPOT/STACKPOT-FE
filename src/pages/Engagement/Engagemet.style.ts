import { css } from "@emotion/react";
import theme from "@styles/theme";

export const iconStyle = css`
  width: 4rem;
  height: 4rem;
  color: ${theme.color.object.hero};
`;

export const title = css`
  ${theme.font.title3}
  color: ${theme.color.point.hero}
`;

export const header = css`
  display: flex;
  gap: 0.8rem;
`;

export const container = css`
  padding-top: 8.4rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const tabsContainer = css`
  display: flex;
  gap: 4.8rem;
`;

export const tabTextStyle = css`
  ${theme.font.title2}
  color: ${theme.color.object.hero};
  text-decoration: none;
  &.active {
    color: ${theme.color.point.hero};
  }
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

export const tabIconStyle = css`
  text-decoration: none;
  color: ${theme.color.object.hero};

  &.active {
    color: ${theme.color.point.hero};
  }
`;

export const categoryContainer = css`
  display: flex;
  gap: 0.8rem;
`;
