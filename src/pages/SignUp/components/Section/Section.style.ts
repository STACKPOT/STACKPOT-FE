import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 3.2rem;
`;
export const titleContainer = css`
  display: flex;
  gap: 0.9rem;
  align-items: center;
`;
export const titleStyle = css`
  ${theme.font.title1}
  color: ${theme.color.point.gray};
`;
export const potIconStyle = css`
  width: 2.4rem;
  height: 2.2rem;
  color: ${theme.color.point.hero};
`;

export const descriptionStyle = css`
  ${theme.font.body3}
  color: ${theme.color.point.gray};
  white-space: pre-wrap;
`;
