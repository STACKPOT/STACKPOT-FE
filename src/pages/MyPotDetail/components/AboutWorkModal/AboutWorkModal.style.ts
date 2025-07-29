import { css } from "@emotion/react";
import theme from "@styles/theme";

export const aboutWorkModalOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const modalStyle = css`
  width: 76rem;
`;

export const thirdContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 71.2rem;
  padding: 0.8rem 0;
`;

export const titleTextStyle = css`
  ${theme.font.title2};
  color: ${theme.color.point.gray};
`;

export const bodyContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 68rem;
  gap: 2.4rem;
  margin-top: 1.6rem;
`;

export const labelTextStyle = css`
  ${theme.font.caption3};
  color: ${theme.color.base.black};
  white-space: nowrap;
`;

export const cancelContainer = css``; // 삭제 예정
