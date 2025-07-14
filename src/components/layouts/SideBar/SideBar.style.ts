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
  z-index: 10;
`;

export const container = css`
  width: 8.6rem;
  padding: 4.8rem 2.1rem;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  align-items: center;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.16);
  border-radius: 24px;
  background-color: white;
`;

export const iconStyle = css`
  width: 2rem;
  height: 2rem;
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
  width: 4.4rem;
  height: 4.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  &:hover {
    background-color: ${theme.color.point.normal};
  }
`;
