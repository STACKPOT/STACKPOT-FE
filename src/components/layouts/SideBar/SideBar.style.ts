import { css } from "@emotion/react";
import theme from "@styles/theme";

export const mainContainer = (top: number) => css`
  display: flex;
  position: absolute;
  align-items: flex-start;
  top: ${top}px;
  left: 2rem;
  transform: translateY(-50%);
  transition: top 0.5s ease-in-out;
  z-index: 10;
`
export const container = css`
  width: 8.6rem;
  padding: 4.8rem 2.1rem;
  border: 0.1rem solid ${theme.color.object.alternative};
  display: flex;
  box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
  border-radius: 12px;
  background: ${theme.color.base.white};
`;

export const menuContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;
`;

export const profileStyle = css`
  width: 3.5rem;
  height: 3.5rem;
  border: 1px solid ${theme.color.border.normal};
  border-radius: 50%;
  cursor: pointer;
`

export const divider = css`
  width: 4.4rem;
  height: 0.2rem;
  background: ${theme.color.object.alternative};
  border-radius: 0.2rem;
`;

export const iconStyle = css`
  width: 2rem;
  height: 2rem;
`;

export const potIconStyle = css`
  width: 2.4rem;
  height: 2.2rem;
`;