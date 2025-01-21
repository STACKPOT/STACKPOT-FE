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
  width: 908px;
  height: 299px;

  .swiper-wrapper {
    display: flex;
    overflow: hidden;
    width: 848px;
    margin-left: 30px;
    margin-right: 30px;
  }

  .swiper-slide {
    flex: 0 0 auto;
    width: 272px !important;
  }
  .swiper-pagination {
    ${theme.font.body2}
    color: ${theme.color.object.assistive};
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 16;
    width: 5rem;
  }

  .swiper-button-next,
  .swiper-button-prev {
    opacity: 1 !important;
    position: absolute;
    width: 4.4rem;
    height: 4.4rem;
    background-color: ${theme.color.interactive.disable};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
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

export const contentFooter = css``;
