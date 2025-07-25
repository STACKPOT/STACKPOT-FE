import { css } from "@emotion/react";
import { media } from "@styles/media";
import theme from "@styles/theme";

export const background = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

export const container = css`
  width: 40rem;
  ${media[1440]} {
    width: 56rem;
  }
  ${media[1920]} {
    width: 76rem;
  }
  padding: 2.4rem;
  background: ${theme.color.base.white};
  border: 1px solid ${theme.color.object.assistive};
  display: inline-flex;
  flex-direction: column;
`;

export const closeIconStyle = css`
  margin-left: auto;
  cursor: pointer;
`;

export const titleContentContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 0.8rem 1.6rem;
`;

export const titleStyle = css`
  color: ${theme.color.point.gray};
  ${theme.font.title2};
`;

export const messageStyle = css`
  max-height: calc(var(--vh, 60vh) - 215px);
  color: ${theme.color.point.gray};
  ${theme.font.body3};
  white-space: pre-line;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const footer = css`
  display: flex;
  justify-content: end;
  gap: 0.8rem;
  padding: 1.6rem;
`;
