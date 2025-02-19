import { css } from "@emotion/react";

export const potImageStyle = (inView: boolean) => css`
  width: 80.9rem;
  height: 43.9rem;
  opacity: ${inView ? 1 : 0};
  transition: opacity 1s;
`;
