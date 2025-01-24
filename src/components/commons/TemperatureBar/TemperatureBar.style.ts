import { css, keyframes } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  width: 35.6rem;
  flex-direction: column;
  align-items: center;
`

const moveTooltip = (start: number, end: number) => keyframes`
  from {
    left: ${start}%;
  }
  to {
    left: ${end}%;
  }
`;

export const toolTipContainer = (start: number, end: number) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  left: ${start}%;
  transform: translateX(-50%);
  animation: ${moveTooltip(start, end)} 0.5s ease-out forwards;
`;

export const toolTip = css`
  padding: 1.1rem 1.6rem;
  border-radius: 8px;
  background: ${theme.color.point.hero};
`

export const textStyle = css`
  ${theme.font.caption2};
  display: flex;
  align-items: center;
  color: ${theme.color.base.white};
`

export const temperatureBase = css`
  width: 100%;
  height: 1.4rem;
  border-radius: 10px;
  background: ${theme.color.point.normal};
  margin-top: 0.4rem;
`

export const temperatureRange = (temperature: number) => css`
  width: ${temperature}%;
  height: 100%;
  border-radius: 10px;
  background: ${theme.color.point.hero};
  animation: grow 0.5s ease-out;

  @keyframes grow {
    from {
      width: 0%; 
    }
    to {
      width: ${temperature}%; 
    }
`