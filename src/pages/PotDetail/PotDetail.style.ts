import { css } from "@emotion/react";
import theme from "@styles/theme";

export const containerStyle = css`
  width: 110rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 8.4rem 0;
`;

export const bodyContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2.4rem;
`;

export const dividerStyle = css`
  height: 1px;
  width: 100%;
  background-color: ${theme.color.object.alternative};
`;

export const contentStyle = css`
  ${theme.font.body3};
  color: ${theme.color.base.black};
  white-space: pre-line;
  word-break: break-all;
`;
