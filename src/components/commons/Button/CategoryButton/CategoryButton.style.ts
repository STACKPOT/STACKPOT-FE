import { css } from "@emotion/react";
import theme from "@styles/theme";

export const buttonStyle = css`
  display: inline-flex;
  align-items: center;
  padding: 0.8rem 1.2rem;
  ${theme.font.caption2}
  box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
  cursor: pointer;
  border-radius: 8px;
`;
export const potButtonStyle = (selected: boolean) => css`
  border: 0.1rem solid
    ${selected ? theme.color.point.hero : theme.color.point.alternative};
  background-color: ${selected
    ? theme.color.point.hero
    : theme.color.base.white};
  color: ${selected ? theme.color.base.white : theme.color.point.hero};
`;

export const backgroundButtonStyle = (selected: boolean) => css`
  border: 0.1rem solid
    ${selected ? theme.color.point.hero : theme.color.point.alternative};
  background-color: ${selected
    ? theme.color.point.hero
    : theme.color.accent.blueBg};
  color: ${selected ? theme.color.base.white : theme.color.point.hero};
`;
