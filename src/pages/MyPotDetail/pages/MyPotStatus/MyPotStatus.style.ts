import { css } from "@emotion/react";
import theme from "@styles/theme";

export const containerStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
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

export const statusTextStyle = css`
  ${theme.font.title1};
  color: ${theme.color.base.darkgray};
`;

export const buttonStyle = css`
  padding: 1.2rem 2.4rem;
  border-radius: 8px;
  border: 0.1rem solid ${theme.color.point.alternative};
  background: ${theme.color.base.white};
  box-shadow: 0 4px 12px 0 rgba(13, 10, 44, 0.06);
  color: ${theme.color.point.hero};
  ${theme.font.captionBold1};
  cursor: pointer;
  transition: background 0.3s ease-out, color 0.3s ease-out;

  &:hover {
    background: ${theme.color.point.alternative};
    color: ${theme.color.base.white};
  }
`;

export const plusButtonStyle = css`
  all: unset;
  cursor: pointer;
`;

export const toDoGirdContainer = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, calc((100% - 2 * 2.4rem) / 3));
  gap: 2.4rem;
`;

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
export const blurOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  pointer-events: none;
`;

export const modalOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;
`;

export const statusBoardContainer = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const iconStyle = css`
  color: ${theme.color.point.hero};
`;

export const statusBoardStyle = css`
  gap: 1.6rem;
  display: flex;
  align-items: center;
`;

export const textStyle = css`
  ${theme.font.display1};
  color: ${theme.color.point.gray};
`;
