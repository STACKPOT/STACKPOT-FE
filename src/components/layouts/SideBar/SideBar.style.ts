import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  width: 8.6rem;
  padding: 4.8rem 2.1rem;
  border-right: 0.1rem solid ${theme.color.object.alternative};
  display: flex;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
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
