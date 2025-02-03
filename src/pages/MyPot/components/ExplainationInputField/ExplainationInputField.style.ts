import { css } from "@emotion/react";
import theme from "@styles/theme";

export const explainationInputFieldStyle = css`
  width: 100%;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  border: 1px solid ${theme.color.object.alternative};
  transition: border 0.3s ease;
  
  &:focus-within {
    border: 2px solid ${theme.color.base.darkgray}; 
  }
`;

export const textareaContainer = css`
  height: 14rem;
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  font: unset;
  ${theme.font.caption3};
  word-wrap: break-word;
  overflow-wrap: break-word;
  padding: 0;
  background: transparent;

  &::placeholder {
    color: ${theme.color.object.hero};  
  }
`;
