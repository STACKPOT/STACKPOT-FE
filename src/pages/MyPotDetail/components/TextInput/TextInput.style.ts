import { css } from "@emotion/react";
import theme from "@styles/theme";

export const firstSectionContainer = css`
  display: flex;
  align-items: center;
  gap: 5.7rem;
  width: 100%;
`;

export const inputFieldStyle = css`
  width: 100%;
  padding: 1.2rem 1.6rem;
  border-radius: 8px;
  border: 1px solid ${theme.color.object.alternative};
  background: ${theme.color.base.white};
  ${theme.font.body3};
  &::placeholder {
    color: ${theme.color.object.hero};
  }
  &:focus {
    outline: none;
    border-color: ${theme.color.point.alternative};
  }
`;
