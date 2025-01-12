import { css } from "@emotion/react";
import theme from "@styles/theme";

export const signupButtonStyle = css`
  ${theme.buttons.variants.style1}; 
  ${theme.font.bodyBold2};
  border: 1px solid rgba(112, 115, 124, 0.2);
  height: 70px;
  padding: 11px 358px;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.buttons.variants.style2}; 
  }

  &:active {
    background-color: ${theme.buttons.variants.style3}; 
  }
`;
