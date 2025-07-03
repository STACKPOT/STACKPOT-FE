import { css } from "@emotion/react";
import theme from "@styles/theme";

export const textStyle = css`
  ${theme.font.body3};
  color: ${theme.color.point.gray};
  margin-top: 0.8rem;
  white-space: break-spaces;
`;
export const container = css`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 2.4rem;
  align-items: center;
  justify-content: center;
  margin-top: 1.6rem;
`;

export const modalStyle = css`
  width: 76rem;
`;
