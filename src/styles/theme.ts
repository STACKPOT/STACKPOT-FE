import { css } from "@emotion/react";

const theme = {
  color: {
    point: {
      normal: "#F1F9FF", // blue-0.100
      alternative: "#5FB5F7", // blue-200
      hero: "#2098F3", // blue-300
      assistive: "#096AB3", // blue-400
      navy: "#001427", // blue-500
      ivory: "#FFFFFC", // ivory-0.100
      yellow: "#FFFFF1", // ivory-200
      neon: "#00E5FF", // neon-0.100
      gray: "#393940", // gray-600
      darkblue: "#012B53", //blue-500
    },
    object: {
      normal: "#F4F5F6", // gray-0.100
      assistive: "#CDD1D5", // gray-500
      alternative: "#DFE3E8", // gray-200
      hero: "#6D7882", // gray-400
      faded: "#F8F9FA", // gray-50
    },
    status: {
      positive: "#37A654",
      caution: "#FFB814",
      negative: "#DE3412",
    },
    accent: {
      blueBg: "#D3E8FD",
      greenBg: "#EAF6EC",
      pinkBg: "#FBEBF0",
      purpleBg: "#EBE2FF",
      yellowBg: "#FFF3DB",
      redBg: "#FFB0B0",
      greenFg: "#228738",
      pinkFg: "#D65C66",
      purpleFg: "#602D95",
      yellowFg: "#D65C66",
      redFg: "#8A240F",
    },
    border: {
      normal: "#70737C33", // transparent-0.100
      alternative: "#919191A1", // transparent-200
    },
    feedback: {
      positive: "#00AF3B", // green-0.100
      caution: "#FFB149", // yellow-0.100
      negative: "#FF5656", // red-0.100
      positive_transparent: "#00AF3B80", // green-50
      caution_transparent: "#FFB14980", // yellow-50
      negative_transparent: "#FF565680", // red-50
      positive_blue_transparent: "#4EACFF80",
    },
    base: {
      white: "#FFFFFF", // white-0.100
      darkgray: "#33363D", // gray-700
      black: "#000000", // black-0.100
    },
    interactive: {
      disable: "#F3F3F3", // gray-0.100
      inactive: "#989BA2", // gray-300
    },
  },
  font: {
    display4: css`
			font-size: 48px;
			line-height: 1.3;
			letter-spacing: -0.1px;
			font-weight: 700;
		`,
    display3: css`
			font-size: 40px;
			line-height: 1.3;
			letter-spacing: -0.1px;
			font-weight: 700;
		`,
    display2: css`
			font-size: 36px;
			line-height: 1.3;
			letter-spacing: -0.1px;
			font-weight: 700;
		`,
    display1: css`
			font-size: 32px;
			line-height: 1.3;
			letter-spacing: -0.1px;
			font-weight: 700;
		`,
    title3: css`
			font-size: 28px;
			line-height: 1.3;
			letter-spacing: -0.1px;
			font-weight: 700;
		`,
    title2: css`
			font-size: 24px;
			line-height: 1.3;
			letter-spacing: -0.1px;
			font-weight: 700;
		`,
    title1: css`
			font-size: 20px;
			line-height: 1.3;
			letter-spacing: -0.1px;
			font-weight: 700;
		`,
    body3: css`
			font-size: 16px;
			line-height: 1.6;
			letter-spacing: -0.1px;
			font-weight: 400;
		`,
    body2: css`
			font-size: 14px;
			line-height: 1.6;
			letter-spacing: -0.1px;
			font-weight: 400;
		`,
    body1: css`
			font-size: 12px;
			line-height: 1.6;
			letter-spacing: -0.1px;
			font-weight: 400;
		`,
    bodyBold3: css`
			font-size: 16px;
			line-height: 1.6;
			letter-spacing: -0.1px;
			font-weight: 700;
		`,
    bodyBold2: css`
			font-size: 14px;
			line-height: 1.6;
			letter-spacing: -0.1px;
			font-weight: 700;
		`,
    bodyBold1: css`
			font-size: 10px;
			line-height: 1.6;
			letter-spacing: -0.1px;
			font-weight: 700;
		`,
    caption3: css`
			font-size: 16px;
			line-height: 1.3;
			letter-spacing: -0.1px;
			font-weight: 700;
		`,
    caption2: css`
			font-size: 14px;
			line-height: 1.3;
			letter-spacing: -0.1px;
			font-weight: 700;
		`,
    caption1: css`
			font-size: 10px;
			line-height: 1.3;
			letter-spacing: -0.1px;
			font-weight: 700;
			
		`,
    captionBold1: css`
			font-size: 12px;
			line-height: 14px;
			font-weight: 700;
		`,
    label3: css`
			font-size: 18px;
			line-height: 1.3;
			font-weight: 500;
			letter-spacing: -0.1px;
		`,
    label2: css`
			font-size: 16px;
			line-height: 1.3;
			font-weight: 500;
			letter-spacing: -0.1px;
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
