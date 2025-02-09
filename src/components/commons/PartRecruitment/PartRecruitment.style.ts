import { css } from "@emotion/react";
import theme from "@styles/theme";

export const partContainer = css`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1.6rem 1.2rem;
`;

export const partButtonContainer = css`
  display: flex;
  justify-content: space-between;
`;

export const partStyle = css`
  display: flex;
  color: ${theme.color.base.darkgray};
  display: flex;
  ${theme.font.caption3};
  white-space: pre;
`;

export const inputContainer = (visible: boolean) => css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-left: 1.2rem;
  opacity: ${visible ? 1 : 0};
`;

export const countInputStyle = css`
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 32px;
  width: 4.7rem;
  padding: 0.8rem;
  text-align: center;
  &:focus {
    border: 1px solid ${theme.color.point.hero};
    outline: none;
  }
`;
