import { css, keyframes } from "@emotion/react";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const iconStyle = css`
  animation: ${spin} 1s linear infinite;
  width: 7rem;
  height: 7rem;
`;
