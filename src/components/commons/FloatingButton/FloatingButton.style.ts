import { css } from "@emotion/react";
import theme from "@styles/theme";

export const WriteButton = css`
  height: 5.4rem;
  padding: 1.6rem 2.4rem;
  background: ${theme.color.border.normal};
  border-radius: 5rem;
  align-items: center;
  display: flex;
  color: ${theme.color.point.alternative};
  ${theme.font.bodyBold1};
  gap: 1rem;
  cursor: pointer;
  position: fixed;
  top: 72.3rem;
  left: 127.7rem;
`;

export const iconStyle = css`
  margin: 0.4rem;
`;
