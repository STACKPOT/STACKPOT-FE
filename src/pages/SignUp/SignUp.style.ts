import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6.4rem 0;
`;
export const mainContainer = css`
  display: flex;
  flex-direction: column;
  padding: 4.4rem 7.2rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 8px;
`;
export const headerContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 2.4rem;
`;
export const headerStyle = css`
  ${theme.font.bodyBold2}
  color: ${theme.color.base.darkgray};
`;
export const dividerStyle = css`
  height: 0.1px;
  background-color: ${theme.color.object.alternative};
`;
export const bodyContainer = css`
  display: flex;
  flex-direction: column;
  /* gap: 5.6rem; */
`;

export const categoryContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 4.4rem;
`;

export const buttonStyle = css`
  margin-top: 2.4rem;
  width: 54.8rem;
  ${theme.font.title1}
`;

export const inputStyle = css`
  padding: 1.2rem 1.6rem;
  ${theme.font.caption3};
  ::placeholder {
    color: ${theme.color.interactive.inactive};
  }
  color: ${theme.color.base.darkgray};
  border-radius: 8px;
  border: 1px solid ${theme.color.border.alternative};
  outline: none;
  &:focus {
    border-color: ${theme.color.point.hero};
  }
`;
