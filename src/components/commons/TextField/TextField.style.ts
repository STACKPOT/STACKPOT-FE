import { css } from "@emotion/react";
import theme from "@styles/theme";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const inputStyle = css`
  padding: 1.2rem 1.6rem;
  ${theme.font.caption3}
  ::placeholder {
    color: ${theme.color.interactive.inactive};
  }
  color: ${theme.color.base.black};
  border-radius: 8px;
  border: 1px solid ${theme.color.border.alternative};
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: ${theme.color.point.hero};
  }
`;

export const textStyle = css`
  margin-left: 1.6rem;
  ${theme.font.caption2}
  color: ${theme.color.interactive.inactive};
`;
