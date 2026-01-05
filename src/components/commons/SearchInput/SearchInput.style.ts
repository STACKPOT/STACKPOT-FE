import { css } from "@emotion/react";
import theme from "@styles/theme";

export const searchInputStyle = css`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 0 auto;
  border-radius: 32px;
  border: 1px solid ${theme.color.object.alternative};
  color: ${theme.color.base.darkgray};
  box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
  width: 51.4rem;
  height: 6rem;
  padding: 0.7rem 2.4rem;
  &:focus {
    border: 1px solid ${theme.color.point.hero};
    outline: none;
  }
`;

export const inputStyle = css`
  ${theme.font.body3}
  display: flex;
  align-items: center;
  width: 100%;
  ::placeholder {
    color: ${theme.color.object.alternative};
  }
  border: none;
  &:focus {
    outline: none;
  }
`;

export const buttonStyle = css`
  background-color: ${theme.color.point.hero};
  cursor: pointer;
  border: none;
  padding: 1rem;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const iconStyle = css`
  color: white;
  width: 2.6rem;
  height: 2.6rem;
`;
