import { css } from "@emotion/react";
import theme from "@styles/theme";

export const content = (larger: boolean) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${larger ? "0.8rem" : ""};
`;

export const contentHeader = css`
  ${theme.font.caption3};
  color: ${theme.color.base.black};
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
  gap: 4.8rem;
`;


export const categoryContainer = css`
  ${theme.font.caption2};
  color: ${theme.color.base.black};
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;
