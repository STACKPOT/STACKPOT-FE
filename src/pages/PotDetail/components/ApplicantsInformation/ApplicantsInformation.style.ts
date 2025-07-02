import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  flex-direction: column;
`;

export const headerContainer = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const titleContainer = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const titleStyle = css`
  ${theme.font.title2};
  color: ${theme.color.point.gray};
`;

export const titleBlueStyle = css`
  ${theme.font.title2};
  color: ${theme.color.point.hero};
`;

export const titleIconStyle = css`
  color: ${theme.color.point.hero};
  width: 2.4rem;
  height: 2.2rem;
`;

export const descriptionStyle = css`
  ${theme.font.body3};
  color: ${theme.color.object.hero};
  white-space: pre-wrap;
`;

export const listContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 2.4rem;
  grid-column-gap: 2.4rem;
  margin-top: 3.2rem;
`;

export const startPotButtonStyle = css`
  margin-top: 4.8rem;
  margin-bottom: 1.6rem;
`;
