import { css, keyframes } from "@emotion/react";
import theme from "@styles/theme";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const contentHeader = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const buttonContainer = css`
  display: flex;
  flex-direction: row;
  gap: 1.3rem;
  align-items: center;
  justify-content: right;
`;

export const contentBody = css`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const iconStyle = css`
  animation: ${spin} 1s linear infinite;
  width: 3rem;
  height: 3rem;
`;

export const cardStyle = css`
  height: 27.3rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 24px;
`;

export const iconContainer = css`
  justify-content: center;
  display: flex;
`;
