import { css } from "@emotion/react";
import theme from "@styles/theme";

export const gridContainer = css`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 17rem;
  row-gap: 1.8rem;
`;
export const elementContainer = css`
  display: flex;
  gap: 2.6rem;
`;
export const elementTitleStyle = css`
  ${theme.font.body1}
  color: ${theme.color.interactive.inactive};
  white-space: nowrap;
  width: 6.7rem;
`;

export const elementContentStyle = css`
  ${theme.font.body1};
  color: ${theme.color.base.darkgray};
  word-break: break-all;
`;
