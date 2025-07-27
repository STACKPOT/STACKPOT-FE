import { css } from "@emotion/react";
import theme from "@styles/theme";

export const formContainer = css`
  margin-top: 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const inputStyle = css`
  margin-left: 1.2rem;
  padding: 1.2rem 1.6rem;
  ${theme.font.caption3}
  font-family: "Pretendard";
  display: flex;
  flex-grow: 1;
  border-radius: 8px;
  color: ${theme.color.base.darkgray};
  border: 1px solid ${theme.color.object.alternative};
  &::placeholder {
    color: ${theme.color.interactive.inactive};
  }
  &:focus {
    border-color: ${theme.color.point.hero};
    outline: none;
  }
`;

export const dateInputStyle = css`
  ${theme.font.caption3}
  padding: 1.2rem 1.6rem;
  border-radius: 8px;
  color: ${theme.color.base.darkgray};
  border: 1px solid ${theme.color.object.alternative};
  width: 100px;
`;

export const labelStyle = css`
  display: flex;
  align-items: center;
  color: ${theme.color.base.darkgray};
  ${theme.font.caption3}
  gap: 3.2rem;
`;

export const roleLabelStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  color: ${theme.color.base.darkgray};
  ${theme.font.caption3};
`;

export const dividerStyle = css`
  height: 1px;
  width: 100%;
  background-color: ${theme.color.object.alternative};
`;

export const buttonContainer = css`
  display: flex;
  flex-direction: row;
  gap: 0.7rem;
`;

export const roleButtonContainer = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5.6rem;  
`;

export const textareaStyle = css`
  padding: 2.4rem;
  height: 40.6rem;
  font-family: "Pretendard";
  border-radius: 12px;
  border: 1px solid ${theme.color.object.alternative};
  ${theme.font.caption3}
  resize: none;
  color: ${theme.color.base.darkgray};
  &::placeholder {
    color: ${theme.color.object.hero};
  }
  &:focus {
    border-color: ${theme.color.point.hero};
    outline: none;
  }
`;

export const partStyle = css`
  display: flex;
  color: ${theme.color.base.darkgray};
  ${theme.font.caption3};
  gap: 3rem;
`;


export const dateContainerStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align:center;
`;

export const potDateStyle = css`
  display: flex;
  flex-direction: row;
`

export const tildeStyle = css`
  ${theme.font.caption3}; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3.2rem;
`;
