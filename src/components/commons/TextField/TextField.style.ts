import { css } from "@emotion/react";
import theme from "@styles/theme";

export const labelStyle = css`
  ${theme.font.caption3}
  display: flex;
  flex-direction: column;
  color: ${theme.color.object.assistive};
`;

export const inputStyle = css`
  padding: 1.2rem 1.6rem;
  ${theme.font.caption3}
  ::placeholder {
    color: ${theme.color.interactive.inactive};
  }
  margin: 0.8rem 0;
  color: ${theme.color.base.black};
  border-radius: 8px;
  border: 1px solid ${theme.color.border.alternative};
  box-sizing: border-box;

  &:focus {
    border-color: ${theme.color.point.alternative};
  }
`;

export const textStyle = css`
  ${theme.font.caption2}
  color: ${theme.color.interactive.inactive};
`;
