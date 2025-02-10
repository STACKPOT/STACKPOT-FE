import { css } from "@emotion/react";
import theme from "@styles/theme";

export const mainContainer = css`
  display: flex;
  flex-direction: column;
  margin: 4.8rem auto;
`;

export const topContainer = css`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const inputStyle = css`
  display: flex;
`;

export const pointStyle = css`
  color: ${theme.color.point.hero};
`;

export const textStyle = css`
  ${theme.font.caption3};
  color: ${theme.color.object.assistive};
`;
export const buttonContainer = css`
  display: flex;
  gap: 1.3rem;
  margin-bottom: 3.2rem;
`;

export const gridContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 27.2rem);
  grid-template-rows: repeat(2, 1fr);
  gap: 4rem 3.2rem;
  margin-bottom: 4rem;
`;

export const paginationStyle = css`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const paginationItemStyle = css`
  border-radius: 8px;
  border: 1px solid ${theme.color.border.alternative};
  font-size: 1.3rem;
`;
export const feedContainer = css`
  display: grid;
  flex-direction: column;
  grid-template-rows: repeat(3, 1fr);
  gap: 4rem;
  margin-bottom: 4rem;
`;
