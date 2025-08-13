import { css } from "@emotion/react";
import theme from "@styles/theme";

export const boardStyle = css`
  display: flex;
  padding: 2.6rem 3.2rem;
  width: 100%;
  border-radius: 24px;
  background: ${theme.color.point.normal};
  border: 1px solid ${theme.color.accent.blueBg};
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.16);
  align-items: center;
  justify-content: space-between;
`;

export const titleContainer = css`
  display: flex;
  gap: 1.6rem;
`;

export const boardTextStyle = css`
  ${theme.font.title1};
  color: ${theme.color.point.hero};
`;

export const highlightStyle = css`
  color: ${theme.color.point.navy};
`;
