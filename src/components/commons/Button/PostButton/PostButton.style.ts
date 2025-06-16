import { css } from "@emotion/react";
import theme from "@styles/theme";

export const buttonStyle = css`
  display: flex;
  padding: 0.6rem 1.6rem;
  gap: 0.8rem;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${theme.color.object.assistive};
  background-color: white;
`;

export const textStyle = css`
  ${theme.font.caption2};
  color: ${theme.color.object.hero};
`;

export const iconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
`;