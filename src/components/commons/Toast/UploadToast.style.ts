import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: inline-flex;
  padding: 1.2rem 2.4rem;
  border-radius: 1.6rem;
  background: ${theme.color.point.alternative};
`

export const toastStyle = css`
  display: flex;
  gap: 0.8rem;
`

export const textStyle = css`
  ${theme.font.label2};
  text-align: center;
  color: ${theme.color.base.white};
`