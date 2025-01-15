import { css } from "@emotion/react";
import theme from "@styles/theme";

export const footerStyle = css`
  padding: 6rem 14rem;
  background: ${theme.color.point.ivory};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const contentStyle = css`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

export const sectionStyle = css`
  display: flex;
  align-items: flex-start;
  gap: 4rem;
  ${theme.font.caption3}
  color: ${theme.color.interactive.inactive};
`;
