import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const gridContainer = css`
  display: grid;
  grid-template-columns: 51.4rem 58.6rem;
  row-gap: 1.8rem;
`;
export const elementContainer = css`
  display: flex;
`;

export const elementIconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
  color: ${theme.color.object.hero};
`
export const elementTitleStyle = css`
  margin-left: 0.8rem;
  ${theme.font.bodyBold3};
  color: ${theme.color.object.hero};
  white-space: nowrap;
`;

export const elementContentStyle = css`
  margin-left: 2.4rem;
  ${theme.font.bodyBold3};
  color: ${theme.color.point.hero};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const dividerStyle = css`
  height: 1px;
  background-color: ${theme.color.object.alternative};
`;