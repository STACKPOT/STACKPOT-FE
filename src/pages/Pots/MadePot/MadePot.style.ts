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

export const container = css`
    margin-top: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
`
export const spinIconContainer = css`
  justify-content: center;
  display: flex;
`;

export const spinIconStyle = css`
  animation: ${spin} 1s linear infinite;
  width: 3rem;
  height: 3rem;
`;

export const cardStyle = css`
    height: 28.2rem;
    border: 1px solid ${theme.color.object.alternative};
    border-radius: 24px;
`