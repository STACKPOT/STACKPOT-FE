import { css } from "@emotion/react";
import theme from "@styles/theme";

export const feedContainer = css`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const itemContainer = css`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
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
