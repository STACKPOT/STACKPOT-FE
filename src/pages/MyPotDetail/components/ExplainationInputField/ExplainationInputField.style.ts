import { css } from "@emotion/react";
import theme from "@styles/theme";

export const textareaContainer = css`
  height: 20.4rem;
  resize: none;
  ${theme.font.body3};
  border: 1px solid ${theme.color.object.alternative};
  padding: 24px;
  border-radius: 8px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  &::placeholder {
    color: ${theme.color.object.hero};
  }
  &:focus {
    outline: none;
    border-color: ${theme.color.point.alternative};
  }
`;
