import { css } from "@emotion/react";
import theme from "@styles/theme";

export const modalStyle = css`
  width: 76rem;
`;

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const titleTextStyle = css`
  ${theme.font.title2};
  color: ${theme.color.point.gray};
`;
export const descriptionStyle = css`
  ${theme.font.title1};
  color: ${theme.color.object.hero};
  align-self: flex-start;
  margin-top: 0.8rem;
`;

export const memberListContainer = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-row-gap: 2.4rem;
  justify-content: space-between;
  max-height: 30.2rem;
  overflow-y: auto;
  margin-top: 2.4rem;
`;
