import { css } from "@emotion/react";

const theme = {
  color: {
    point: {
      normal: "#99CDFF", // blue-100
      alternative: "#4EACFF", // blue-200
      hero: "#0283F5", // blue-300
      assistive: "#004E98", // blue-400
      navy: "#001427", // blue-500
      ivory: "#FDFDF8", // ivory-100
      yellow: "#FFFFF1", // ivory-200
      neon: "#00E5FF", // neon-100
      gray: "#393940", // gray-600
      darkblue: "#012B53", //blue-500
    },
    object: {
      normal: "#F3F3F3", // gray-100
      alternative: "#D4D4D4", // gray-200
      hero: "#919191", // gray-400
      assistive: "#767676", // gray-500
      faded: "#F8F9FA", // gray-50
    },
    border: {
      normal: "#70737C33", // transparent-100
      alternative: "#919191A1", // transparent-200
    },
    feedback: {
      positive: "#00AF3B", // green-100
      caution: "#FFB149", // yellow-100
      negative: "#FF5656", // red-100
      positive_transparent: "#00AF3B80", // green-50
      caution_transparent: "#FFB14980", // yellow-50
      negative_transparent: "#FF565680", // red-50
      positive_blue_transparent: "#4EACFF80",
    },
    base: {
      white: "#FFFFFF", // white-100
      darkgray: "#2B2B2B", // gray-700
      black: "#000000", // black-100
    },
    interactive: {
      disable: "#F3F3F3", // gray-100
      inactive: "#989BA2", // gray-300
    },
  },
  font: {
    display3: css`
      font-size: 40px;
      line-height: 40px;
      letter-spacing: -0.72px;
      font-weight: 700;
    `,
    display2: css`
      font-size: 36px;
      line-height: 38px;
      letter-spacing: -0.648px;
      font-weight: 700;
    `,
    display1: css`
      font-size: 32px;
      line-height: 42px;
      letter-spacing: -0.595px;
      font-weight: 700;
    `,
    title3: css`
      font-size: 30px;
      line-height: 34px;
      letter-spacing: -0.546px;
      font-weight: 600;
    `,
    title2: css`
      font-size: 28px;
      line-height: 32px;
      letter-spacing: -0.375px;
      font-weight: 600;
    `,
    title1: css`
      font-size: 20px;
      line-height: 28px;
      letter-spacing: -0.312px;
      font-weight: 600;
    `,
    bodyBold3: css`
      font-size: 32px;
      line-height: 40px;
      letter-spacing: -0.144px;
      font-weight: 700;
    `,
    bodyBold2: css`
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.144px;
      font-weight: 700;
    `,
    bodyBold1: css`
      font-size: 16px;
      line-height: 19px;
      letter-spacing: -0.144px;
      font-weight: 700;
    `,
    captionBold1: css`
      font-size: 16px;
      line-height: 16px;
      letter-spacing: -0.16px;
      font-weight: 600;
    `,
    body3: css`
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.192px;
      font-weight: 500;
    `,
    body2: css`
      font-size: 20px;
      line-height: 28px;
      letter-spacing: -0.8%;
      font-weight: 500;
    `,
    body1: css`
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.16px;
      font-weight: 500;
    `,
    caption3: css`
      font-size: 16px;
      line-height: 28px;
      letter-spacing: -0.16px;
      font-weight: 500;
    `,
    caption2: css`
      font-size: 14px;
      line-height: 24px;
      letter-spacing: -0.084px;
      font-weight: 500;
    `,
    caption1: css`
      font-size: 12px;
      line-height: 14px;
      font-weight: 400;
    `,
    label3: css`
      font-size: 18px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.108px;
    `,
    label2: css`
      font-size: 16px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: -0.096px;
    `,
  },
};

export type ColorType = typeof theme.color;
export type FontType = typeof theme.font;

export interface ThemeType {
  color: ColorType;
  font: FontType;
}

export default theme;
