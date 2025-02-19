import { css } from "@emotion/react";

const commonStyle = (inView: boolean) => css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%) ${inView ? "scale(1)" : "scale(0.4)"};
  opacity: ${inView ? 1 : 0};
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  will-change: opacity, transform;
`;

export const imageContainer = css`
  position: relative;
`;

export const modalStyle = (inView: boolean) => css`
  ${commonStyle(inView)}
  width: 40.4rem;
  height: 25.4rem;
  top: 3.3rem;
`;

export const profileImageStyle = (inView: boolean) => css`
  ${commonStyle(inView)}
  width: 56.6rem;
  height: 12.1rem;
  top: 4.8rem;
`;
