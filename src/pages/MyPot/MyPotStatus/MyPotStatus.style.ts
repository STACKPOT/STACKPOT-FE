import { css } from "@emotion/react";
import theme from "@styles/theme";

export const boardStyle = css`
  display: flex;
  padding: 1.6rem 3.2rem;
  gap: 1.6rem;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 24px;
  background: ${theme.color.point.alternative};
`;

export const potIconStyle = css`
  color: ${theme.color.base.white};
`;

export const boardTextStyle = css`
  ${theme.font.title1};
  color: ${theme.color.base.white};
`;

export const highlightStyle = css`
  color: ${theme.color.point.navy};
`;

export const containerStyle = css`
  padding: 3.2rem 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 24px;
  border: 0.1rem solid ${theme.color.object.alternative};
  background: ${theme.color.base.white};
  box-shadow: 0 4px 12px 0 rgba(13, 10, 44, 0.06);
`;

export const gridContainerStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export const paginationContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
`;

export const paginationButton = css`
  background: ${theme.color.object.normal};
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.4rem;
  color: ${theme.color.base.darkgray};
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const paginationTextStyle = css`
  ${theme.font.body2};
  color: ${theme.color.object.assistive};
`

export const statusBoardContainer = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`

export const statusBoardStyle = css`
  gap: 1.6rem;
  display: flex;
`

export const statusTextStyle = css`
  ${theme.font.bodyBold2};
  color: ${theme.color.base.darkgray};
`

export const buttonStyle = css`
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-item: center;
  border-radius: 8px;
  border: 0.1rem solid ${theme.color.point.alternative};
  background: ${theme.color.base.white};
  box-shadow: 0 4px 12px 0 rgba(13, 10, 44, 0.06);
  color: ${theme.color.point.hero};
  ${theme.font.captionBold1};
`

export const toDoGirdContanier = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;
`

export const toDoStatusContainer = css`
  display: flex;
  flex-direction: column; 
  gap: 2.4rem; 
`;

export const toDoStatusHeader = css`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 100%; 
`;
