import { css } from "@emotion/react";
import theme from "@styles/theme";

export const categoryStyle = css`
  display: flex;
  gap: 1.6rem;
  padding: 3.2rem 1.3rem;
`;

export const potCardContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 3.2rem;
  justify-content: center;
  padding: 0 1.3rem;
`;

export const categoryButtonWrapper = css`
  display: inline-block;
`;
export const paginationStyle = css`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

export const paginationItemStyle = css`
  border-radius: 8px;
  border: 1px solid ${theme.color.border.alternative};
  font-size: 1.3rem;
`;
