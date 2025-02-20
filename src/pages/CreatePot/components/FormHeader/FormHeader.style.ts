import { css } from "@emotion/react";
import theme from "@styles/theme";

export const headContainer = css`
  display: flex;
  justify-content: space-between;
`;

export const headButtonContainer = css`
  display: flex;
  gap: 2.2rem;
`

export const titleStyle = css`
  ${theme.font.bodyBold2}
  color: ${theme.color.base.darkgray};
`;

export const titleContainer = css`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

export const iconStyle = css`
  color: ${theme.color.point.hero};
  width: 2.4rem;
  height: 2.4rem;
`;