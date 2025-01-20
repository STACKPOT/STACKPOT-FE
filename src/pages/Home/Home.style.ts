import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  padding: 3.2rem 0;
  overflow: hidden;
  gap: 3.2rem;
  display: flex;
  flex-direction: column;
`;

export const content = css`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
export const contentHeader = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
export const contentTitle = css`
  ${theme.font.bodyBold2};
  color: ${theme.color.base.darkgray};
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;
export const iconStyle = css`
  color: ${theme.color.point.hero};
`;
export const contentBody = css`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  gap: 3.2rem;
`;

export const buttonContainer = css`
  display: flex;
  flex-direction: row;
  gap: 1.3rem;
  align-items: center;
`;

export const swiperContainer = css`
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  .swiper-wrapper {
    display: flex;
    overflow: hidden;
    width: 848px;
  }

  .swiper-slide {
    flex: 0 0 auto;
    width: 272px !important;
  }
  .swiper-pagination {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 16;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #000;
    width: 30px;
    height: 30px;
    z-index: 16;
  }

  .swiper-button-next {
    right: 5px;
  }

  .swiper-button-prev {
    left: 5px;
  }
`;
