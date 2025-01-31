import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  padding: 3.2rem 0;
  overflow: hidden;
  gap: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const bannerStyle = css`
  width: 90.8rem;
  height: 22.2rem;
  margin-top: 4.8rem;
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
  justify-content: row;
  align-items: center;
  gap: 0.8rem;
`;
export const iconStyle = css`
  color: ${theme.color.point.hero};
  width: 2.4rem;
  height: 2.2rem;
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
  justify-content: right;
`;

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
