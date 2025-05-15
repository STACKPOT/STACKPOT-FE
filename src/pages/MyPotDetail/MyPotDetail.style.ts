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
  gap: 1.6rem;
`;

export const textStyle = css`
  ${theme.font.bodyBold2};
  color: ${theme.color.point.hero};
`;

export const iconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
  color: ${theme.color.object.assistive};
`;

export const tabsContainer = css`
  display: flex;
  align-items: flex-start;
  gap: 4.8rem;
  align-self: stretch;
`;

export const navLinkStyle = (isActive: boolean) => css`
  color: ${isActive ? theme.color.point.hero : theme.color.interactive.inactive};
  text-decoration: none;
  transition: color 0.3s ease-out;
  ${theme.font.bodyBold2};
  &:hover {
    color: ${theme.color.point.hero};
  }
`;

export const viewId = css`
  padding: 0.8rem 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 4px;
  background: #FEE500;
  cursor: pointer;
`;

export const viewTextStyle = css`
  ${theme.font.caption1};
  color: rgba(0, 0, 0, 0.85);
`;
