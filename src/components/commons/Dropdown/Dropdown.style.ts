import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  width: 16rem;
  background: ${theme.color.base.white};
  border-radius: 1.6rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const header = css`
  padding: 1.6rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const headerText = css`
  color: ${theme.color.point.navy};
  ${theme.font.body1};
`;

export const icon = css`
  font-size: 1.4rem;
  transition: transform 0.3s;
`;

export const dropdown = css`
  background: ${theme.color.base.white};
`;

export const option = (isSelected: boolean) => css`
  padding: 1.6rem 2rem;
  cursor: pointer;
  border-top: 0.1rem solid ${theme.color.object.alternative};

  color: ${isSelected ? theme.color.point.hero : theme.color.point.gray};
  ${theme.font.body1};
`;
