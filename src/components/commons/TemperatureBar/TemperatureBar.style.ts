import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  width: 35.6rem;
  padding: 1.3rem 0.5rem;
  flex-direction: column;
  align-items: center;
`
export const toolTip = css`
  padding: 1.1rem 1.6rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
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
  display: flex;
  width: 100%;
  height: 1.4rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 1rem;
  background: ${theme.color.point.normal};
  margin-top: 0.4rem;
`

export const temperatureRange = (temperature: number) => css`
  width: ${temperature}%;
  height: 100%;
  border-radius: 1rem;
  background: ${theme.color.point.hero};
`