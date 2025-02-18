import { css } from "@emotion/react";
import theme from "@styles/theme";

export const dropdownStyle = css`
  position: absolute;
  top: calc(100% + 21px);
  right: 0;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 16px;
  width: 16rem;
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.base.white};
`;

export const containerStyle = (edit: boolean) => css`
  color: ${theme.color.object.assistive};
  text-decoration: none;
  ${theme.font.caption3};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1rem;
  position: relative;

  &:first-child {
    border-radius: 16px 16px 0 0;
  }

  &:last-child {
    border-radius: 0 0 16px 16px;
  }

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${theme.color.object.alternative};
  }

  &:hover {
    color: ${edit ? theme.color.point.hero : theme.color.feedback.negative};
    background-color: ${theme.color.object.faded};
    text-decoration: ${edit ? "none" : "underline"};
  }
`;

export const bodyStyle = css`
  height: 2.8rem;
`;
