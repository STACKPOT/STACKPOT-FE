import { css } from "@emotion/react";
import theme from "@styles/theme";

export const signupButtonStyle = css`
  ${theme.color.point.hero};
  ${theme.font.bodyBold2};
  border: 1px solid rgba(112, 115, 124, 0.2);
  height: 7rem;
  padding: 1.1rem 35.8rem;
  border-radius: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.color.point.assistive}; 
  }

  &:active {
    background-color: ${theme.color.point.navy}; 
  }
`;
