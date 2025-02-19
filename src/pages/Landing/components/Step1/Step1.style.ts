import { css } from "@emotion/react";

export const feedImageStyle = (inView: boolean) => css`
  width: 81.1rem;
  height: 44rem;
  opacity: ${inView ? 1 : 0};
  transition: opacity 1s;
`;
