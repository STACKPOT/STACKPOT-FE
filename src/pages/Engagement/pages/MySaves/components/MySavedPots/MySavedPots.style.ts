import { css } from "@emotion/react";
import theme from "@styles/theme";

export const potContainer = css`
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
  align-items: center;
`;

export const itemContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 30rem);
  grid-auto-rows: auto;
  gap: 3.2rem 3.7rem;
`;

export const paginationStyle = css`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 4.8rem;
`;

export const paginationItemStyle = css`
  border-radius: 8px;
  border: 1px solid ${theme.color.border.alternative};
  font-size: 1.3rem;
`;
