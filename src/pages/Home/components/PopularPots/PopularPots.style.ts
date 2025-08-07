import { css } from "@emotion/react";
import theme from "@styles/theme";

export const swiperContainer = css`
  position: relative;
  overflow: hidden;
  width: 94.8rem;

  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
`;

export const buttonContainer = css`
  display: flex;
  gap: 3.2rem;
  margin-top: 1.6rem;
  justify-content: center;
  align-items: center;
`;
