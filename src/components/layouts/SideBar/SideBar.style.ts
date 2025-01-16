import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = (top: number) => css`
  width: 8.6rem;
  padding: 4.8rem 2.1rem;
  border: 0.1rem solid ${theme.color.object.alternative};
  display: flex;
  box-shadow: 0px 4px 12px 0px ${theme.color.border.alternative};
  border-radius: 12px;
  position: absolute;
  top: ${top}px;
  left: 2rem; 
  transform: translateY(-50%);
  transition: top 0.5s ease-in-out;
`;

export const menuContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;
`;

export const divider = css`
  width: 4.4rem;
  height: 0.2rem;
  background: ${theme.color.object.alternative};
  border-radius: 0.2rem;
`;
