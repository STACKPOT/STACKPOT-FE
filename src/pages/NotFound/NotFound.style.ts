import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ImageStyle = css`
  width: 37.8rem;
`;

export const titleStyle = css`
  ${theme.font.display1};
  margin-top: 3.2rem;
`;

export const contentStyle = css`
  ${theme.font.caption3};
  color: ${theme.color.base.darkgray};
  text-align: center;
  margin: 2.4rem 0 4.8rem 0;
`;
