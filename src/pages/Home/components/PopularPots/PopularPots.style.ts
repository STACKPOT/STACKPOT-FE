import { css } from "@emotion/react";
import theme from "@styles/theme";

export const swiperContainer = css`
  position: relative;
  overflow: hidden;
  width: 84.8rem;
  height: 29.9rem;

  .swiper-pagination {
    ${theme.font.body2}
    color: ${theme.color.object.assistive};
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 5rem;
  }

  .swiper-button-next,
  .swiper-button-prev {
    opacity: 1 !important;
    width: 4.4rem;
    background-color: ${theme.color.interactive.disable};
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    transform: translateY(290%);
  }

  .swiper-button-next {
    right: calc(50% - 95px);
  }

  .swiper-button-prev {
    left: calc(50% - 95px);
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 1.2rem;
    color: ${theme.color.interactive.inactive};
    font-weight: bold;
  }
`;