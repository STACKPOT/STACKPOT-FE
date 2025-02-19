import { css } from "@emotion/react";

export const imageContainer = css`
  position: relative;
`;

const commonStyle = css`
  position: absolute;
  left: 50%;
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  will-change: opacity, transform;
`;

export const TaskCardStyle = (inView: boolean) => css`
  ${commonStyle}
  width: 26.9rem;
  height: 19rem;
  top: 14.7rem;
  transform: translateX(${inView ? "-115%" : "-50%"});
  opacity: ${inView ? 1 : 0};
`;

export const AISummaryStyle = (inView: boolean) => css`
  ${commonStyle}
  width: 17.4rem;
  height: 6.7rem;
  top: 34rem;
  transform: translateX(${inView ? "70%" : "-50%"});
  opacity: ${inView ? 1 : 0};
`;
