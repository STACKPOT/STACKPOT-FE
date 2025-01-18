import { css } from "@emotion/react";
import theme from "@styles/theme";

export const searchInputStyle = css`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 0 auto;
`;

export const inputStyle = css`
  ${theme.font.caption2}
  display: flex;
  width: 49.8rem;
  height: 6rem;
  padding: 2.4rem;
  align-items: center;
  border-radius: 32px;
  border: 1px solid ${theme.color.object.alternative};
  color: ${theme.color.base.darkgray};
  box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);

  ::placeholder {
    color: ${theme.color.object.alternative};
  }
  &:focus {
    border: 1px solid ${theme.color.point.hero};
    outline: none;
  }
`;

export const buttonStyle = css`
  background-color: ${theme.color.point.hero};
  cursor: pointer;
  display: inline-flex;
  padding: 1rem;
  border: none;
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
`;
