import { css } from "@emotion/react";
import theme from "@styles/theme";

export const modalOverlayStyle = css`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const modalContainerStyle = css`
  background: white;
  border: 1px solid ${theme.color.object.assistive};
  border-radius: 8px;
  width: 76rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const modalCloseButtonStyle = css`
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${theme.color.object.assistive};
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

export const modalHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const modalBodyStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const modalTitleStyle = css`
  ${theme.font.title2};
`;

export const modalAddButtonStyle = css`
  ${theme.font.caption2};
  color: ${theme.color.base.white};
  background-color: ${theme.color.point.hero};
  padding: 1.1rem 1.6rem;
  border-radius: 32px;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.04);
  margin-left: auto;
`;

export const modalExplainStyle = css`
  ${theme.font.body3};
  color: ${theme.color.point.gray}

`;

export const modalInputStyle = (isEmpty: boolean) => css`
  padding: 1.2rem 1.6rem;
  border: 1px solid ${isEmpty ? theme.color.object.assistive : theme.color.point.alternative};
  border-radius: 8px;
  width: 100%;
  min-height: 14.8rem;
  background: white;
`;

export const modalTagListStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
  min-height: 6rem;
`;

export const modalTagStyle = css`
  ${theme.font.body3};
  background: ${theme.color.point.normal};
  color:${theme.color.point.hero};
  border: 1px solid ${theme.color.point.alternative};
  border-radius: 16px;
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const modalTagCloseButtonStyle = css`
  display: flex;
  background: transparent;
  color: ${theme.color.point.hero};

  font-size: 2.4rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const modalCompleteButtonStyle = css`
  ${theme.font.title1};
  background-color: ${theme.color.point.hero};
  color: white;
  padding: 1.7rem 30.5rem;
  border-radius: 8px;
`;



export const modalSeriesInputStyle = css`
  ${theme.font.body3};
  border: none;
  outline: none;
  flex: 1;
`;