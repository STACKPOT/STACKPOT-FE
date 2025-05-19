import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  align-items: center;
  padding: 2.2rem 3.7rem;
  border-radius: 8px;
  border: 1px solid ${theme.color.accent.blueBg};
  cursor: pointer;
  transition: color,background-color 0.3s ease-out;

  &:hover{
  background-color: ${theme.color.point.normal};
  }
  &:hover p {
  color: ${theme.color.object.hero};
  }
`;
export const profileImageStyle = css`
  width: 5rem;
  height: 5rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 50%;
`;
export const bodyTextStyle = css`
  ${theme.font.bodyBold3};
  color: ${theme.color.point.alternative};
  margin-left: 2.4rem;
  transition: color 0.3s ease-out;
`;

export const buttonContainer = css`
  margin-left: auto;
`