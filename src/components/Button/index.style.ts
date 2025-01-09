import { css } from "@emotion/react";
import theme from "@styles/theme";

export const buttonStyle = (color: string) => css`
  padding: 0.6rem 2.4rem;
  background-color: ${color};
  border: none;
  border-radius: 32px;
  cursor: pointer;
  ${theme.font.captionBold1}
  color: white;
`;
