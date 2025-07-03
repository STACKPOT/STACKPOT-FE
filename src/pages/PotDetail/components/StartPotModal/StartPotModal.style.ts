import { css } from "@emotion/react";
import theme from "@styles/theme";

export const memberListContainer = css`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-row-gap: 1.6rem;
  justify-content: space-between;
  margin-top: 1.6rem;
  max-height: 30.7rem;
  overflow-y: auto;
`;

export const titleStyle = css`
  ${theme.font.title2}
  color: ${theme.color.point.gray};
  white-space: pre-wrap;
`;

export const modalStyle = css`
  width: 76.3rem;
`;
