import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const titleContainer = css`
  display: flex;
  gap: 1rem;
`;
export const backButtonStyle = css`
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 0.4rem;
  border-radius: 4px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const backButtonIconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
`;
export const titleStyle = css`
  ${theme.font.bodyBold3}
  color: ${theme.color.base.darkgray};
  word-break: break-all;
  margin-right: 1.6rem;
`;
