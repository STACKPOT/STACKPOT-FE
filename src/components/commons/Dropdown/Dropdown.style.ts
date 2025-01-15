import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  width: 16rem;
  background: ${theme.color.base.white};
  border-radius: 1.6rem;
  border: 0.1rem solid ${theme.color.object.alternative};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const header = css`
  width: 16rem;
  height: 4.8rem;
  padding: 1.6rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const headerText = css`
  color: ${theme.color.point.navy};
  ${theme.font.caption3};
`;

export const icon = css`
  font-size: 1.4rem;
  transition: transform 0.3s;
`;

export const dropdown = css`
  width: 16rem;
  background: ${theme.color.base.white};
`;

export const option = (isSelected: boolean) => css`
  padding: 1rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-top: 0.1rem solid ${theme.color.object.alternative};
  color: ${isSelected ? theme.color.point.hero : theme.color.point.gray};
  ${theme.font.caption3};
`;
