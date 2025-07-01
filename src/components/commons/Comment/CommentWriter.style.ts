import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: stretch;
`
export const textAreaStyle = css`
  min-height: 11.6rem;
  padding: 1.5rem 2.3rem;
  ${theme.font.body3};
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 8px;
  resize: none;
  overflow: hidden;
  
  &::placeholder{
    color: ${theme.color.object.hero};
  }
  &:focus{
    border-color: ${theme.color.point.alternative};
    outline: none;
  }
  &::-webkit-scrollbar{
    display: none;
  }
`
export const submitButtonContainer = css` 
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: end;
`
export const recommentCancelStyle = css`
  ${theme.font.caption3};
  color: ${theme.color.point.hero};
  background-color: transparent;
`