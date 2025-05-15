import { css } from "@emotion/react";
import theme from "@styles/theme";

export const firstSectionContainer = css`
  display: flex;
  align-items: center;
  gap: 4.2rem;
  width: 100%;
`;

export const inputFieldStyle = css`
  width: 100%;
  font: unset;
  padding: 1.2rem 1.6rem;
  align-self: center;
  border-radius: 8px;
  border: 1px solid ${theme.color.object.alternative};
  background: ${theme.color.base.white};
  height: 5.2rem;
  ${theme.font.caption3};  
  &::placeholder {
    color: ${theme.color.object.hero};  
  }
`;
