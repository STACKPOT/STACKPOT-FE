import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  position: relative;
  min-height: 60rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const bgImage = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 854px;
  max-width: 90vw;
  height: auto;

`;

export const foreground = css`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  text-align: center;
`;

export const titleStyle = css`
  ${theme.font.title2};
`;

export const contentStyle = css`
  ${theme.font.body3};
  color: ${theme.color.object.hero};
`;
