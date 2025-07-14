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

export const pageNumberStyle = css`
  ${theme.font.caption3}
  color: ${theme.color.point.gray};
`;

export const buttonStyle = css`
  padding: 1rem;
  border-radius: 50%;
  border: none;
  background-color: ${theme.color.point.normal};
  height: 4.4rem;
`;

export const iconStyle = css`
  transform: scaleX(-1);
`;
