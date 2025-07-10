import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  flex-direction: column;
`;

export const categoryStyle = css`
  display: flex;
  gap: 0.8rem;
`;

export const ctaCardWrapper = css`
  margin-top: 3.2rem;
`;

export const potCardContainer = css`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 3.2rem 3.7rem;
  justify-content: center;
  align-self: center;
  margin-top: 3.2rem;
`;

export const categoryButtonWrapper = css`
  display: inline-block;
`;
export const paginationStyle = css`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 4.8rem;
`;

export const paginationItemStyle = css`
  border-radius: 8px;
  border: 1px solid ${theme.color.border.alternative};
  font-size: 1.3rem;
`;

export const noDataContainer = css`
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
  padding: 16.9rem 0;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

export const noDataTextStyle = css`
  ${theme.font.title1};
  color: ${theme.color.object.hero};
  text-align: center;
  white-space: pre-wrap;
`;
