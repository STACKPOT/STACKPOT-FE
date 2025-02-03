import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 4.8rem 0;
`;

export const selectContainer = css`
  justify-content: center;
  gap: 1.6rem;
` 

export const tabsContainer = css`
  display: flex;
  padding: 1.6rem 0;
  align-items: flex-end;
  gap: 3.2rem;
`

export const tabsTextStyle = css`
  ${theme.font.bodyBold2};
  color: ${theme.color.interactive.inactive}; 
  text-decoration: none;
  transition: color 0.3s ease-out;

  &:hover {
    transform: scale(1.05);
    color: ${theme.color.point.hero};
  }

  /* NavLink가 active일 때 색상 */
  &.active {
    color: ${theme.color.point.hero};  
  }
`;
