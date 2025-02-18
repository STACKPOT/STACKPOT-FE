import { css } from "@emotion/react";
import theme from "@styles/theme";

export const dropdownStyle = css`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 3000;
  background-color: white;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 16rem;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.base.white};
`;


export const iconStyle = css`
  cursor: pointer;
`;

export const containerStyle = (edit: boolean) => css`
  border-bottom: ${edit
    ? `1px solid ${theme.color.object.alternative}`
    : "none"};
  color: ${theme.color.object.assistive};
  ${theme.font.caption3};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1rem;

  &:hover,
  &:focus {
    color: ${edit ? theme.color.point.hero : theme.color.feedback.negative};
    background-color: ${theme.color.object.faded};
    text-decoration: ${edit ? "none" : "underline"};
  }
`;

export const bodyStyle = css`
  position: relative;
  height: 2.8rem;
`;
