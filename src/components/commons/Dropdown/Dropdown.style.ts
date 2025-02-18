import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  position: relative;
  width: 13.4rem;
  height: 4.8rem;
`;

export const header = css`
  border: 0.1rem solid ${theme.color.object.alternative};
  border-radius: 2rem;
  background: ${theme.color.base.white};
  width: 100%;
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
`;

export const headerText = css`
  color: ${theme.color.point.navy};
  ${theme.font.caption3};
`;

export const icon = css`
  margin-left: 0.4rem;
  font-size: 1.4rem;
`;

export const dropdown = css`
  position: absolute;
  top: 5.2rem;
  width: 100%;
  border: 0.1rem solid ${theme.color.object.alternative};
  border-radius: 1.6rem;
  background: ${theme.color.base.white};
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const option = css`
  padding: 1.2rem 0;
  text-align: center;
  cursor: pointer;
  color: ${theme.color.object.assistive};
  ${theme.font.caption3};
  position: relative;

  &:not(:last-child) {
    border-bottom: 0.1rem solid ${theme.color.object.alternative};
  }

  &:hover {
    color: ${theme.color.point.hero};
    background-color: ${theme.color.object.faded};
  }

  &:first-of-type {
    border-radius: 1.6rem 1.6rem 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 1.6rem 1.6rem;
    border-bottom: none;
  }
`;
