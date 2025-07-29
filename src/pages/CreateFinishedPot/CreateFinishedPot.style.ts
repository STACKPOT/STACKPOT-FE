import { css } from "@emotion/react";
import { spin } from "@styles/animation";

export const loadingContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const iconStyle = css`
  animation: ${spin} 1s linear infinite;
  width: 7rem;
  height: 7rem;
`;
