import { css } from "@emotion/react";
import theme from "@styles/theme";

export const buttonStyle = css`
  ${theme.font.captionBold1};
  ${theme.buttons.base}; 
  ${theme.buttons.variants.style1};
  transition: all 0.3s ease;

  border: none;
  outline: none;

  &:hover {
    ${theme.buttons.variants.style2};
  }

  &:active {
    ${theme.buttons.variants.style3};
  }
`;

export const style4ButtonStyle = css`
  ${theme.font.captionBold1};
  ${theme.buttons.base};
  ${theme.buttons.variants.style4}; 
  transition: all 0.3s ease;

  &.on {
    ${theme.buttons.variants.style1};
  }
`;

export const style5ButtonStyle = css`
  ${theme.font.captionBold1};
  ${theme.buttons.base};
  ${theme.buttons.variants.style5}; 
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;
