import { css } from "@emotion/react";
import theme from "@styles/theme";
import { CSSProperties } from "react";

export const mainContainer = (top: number) => css`
  display: flex;
  position: absolute;
  align-items: flex-start;
  top: ${top}px;
  left: 2rem;
  transform: translateY(-50%);
  transition: top 0.5s ease-in-out;
`;

export const container = css`
  width: 8.6rem;
  padding: 48px 21px;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.16);
  border-radius: 24px;
  background-color: white;
`;

export const iconStyle = css`
  width: 20px;
  height: 20px;
`;

export const potIconStyle = css`
  width: 2.4rem;
  height: 2.2rem;
`;

export const labelStyle = css`
  ${theme.font.caption1};
`;

export const getNavLinkStyle = (isActive: boolean): CSSProperties => ({
  color: isActive ? theme.color.point.hero : theme.color.object.hero,
  textDecoration: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const menuItemStyle = css`
  width: 44px;
  height: 45px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &:hover {
    background-color: ${theme.color.point.normal};
  }
`;
