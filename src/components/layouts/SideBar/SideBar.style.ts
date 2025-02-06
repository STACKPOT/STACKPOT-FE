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
`;
export const container = css`
  width: 8.6rem;
  padding: 4.8rem 2.1rem;
  border: 0.1rem solid ${theme.color.object.alternative};
  display: flex;
  flex-direction: column;
  gap: 8rem;
  align-items: center;
  box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
  border-radius: 12px;
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
