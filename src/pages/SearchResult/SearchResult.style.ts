import { css } from "@emotion/react";
import theme from "@styles/theme";

export const mainContainer = css`
  display: flex;
  flex-direction: column;
  margin: 4.8rem auto;
  position: relative;
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
  padding-bottom: 4rem;
`;

export const paginationStyle = css`
  position: absolute;
  bottom: 0;
`;

export const paginationItemStyle = css`
  border-radius: 8px;
  border: 1px solid ${theme.color.border.alternative};
  font-size: 1.3rem;
`;
export const feedContainer = css`
  display: grid;
  flex-direction: column;
  gap: 4rem;
  padding-bottom: 4rem;
`;

export const paginationContainer = css`
  height: 3.2rem;
  display: flex;
  justify-content: center;
`;
