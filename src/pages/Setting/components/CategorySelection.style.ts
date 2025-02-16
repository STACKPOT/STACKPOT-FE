import { css } from "@emotion/react";
import theme from "@styles/theme";

export const content = (larger: boolean) => css`
  display: flex;
  flex-direction: column;
  gap: ${larger ? "0.8rem" : ""};
`;
export const contentHeader = css`
  gap: 1.6rem;
  ${theme.font.title1};
  color: ${theme.color.base.darkgray};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const contentBody = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${theme.font.caption3};
  color: ${theme.color.object.assistive};
`;

export const categoryContainer = css`
  margin-top: 1.6rem;
  ${theme.font.caption3};
  color: ${theme.color.base.black};
  display: flex;
  justify-content: row;
  gap: 0.8rem;
`;

export const categoriesStyle = css`
  display: flex;
  justify-content: row;
  gap: 0.8rem;
`;