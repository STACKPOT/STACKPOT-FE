import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  height: 76.1rem;
  width: 8.6rem;
  padding: 4.8rem 2.1rem;
  background: ${theme.color.base.white};
  box-shadow: 0rem 0rem 0.1rem rgba(0, 0, 0, 0.04);
  border-radius: 1.2rem;
  border-right: 0.1rem solid ${theme.color.object.alternative};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const menuContainer = css`
  height: 100%;
  width: 4.4rem;
  display: inline-flex;
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
