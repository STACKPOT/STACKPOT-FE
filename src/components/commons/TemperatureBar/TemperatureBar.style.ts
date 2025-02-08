import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
    height: 3.8rem;
    display: flex;
    gap: 2.8rem;
    align-items: center;
    margin-top: 1.6rem;
`
export const titleContainer = css`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`
export const titleStyle = css`
    ${theme.font.caption1};
    color: ${theme.color.base.darkgray};
`
export const valueContainer = css`
    width: 7.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const valueStyle = css`
    width: 5.6rem;
    ${theme.font.body1};
    color: ${theme.color.point.hero};
    text-align: center;
`
export const fireIconStyle = css`
    width: 1.6rem;
    height: 1.6rem;
`
export const temperatureBarContainer = css`
  display: flex;
  width: 37.9rem;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
`

export const temperatureBase = css`
  width: 100%;
  height: 1.4rem;
  border-radius: 10px;
  background: ${theme.color.object.alternative};
  margin-top: 0.4rem;
`

export const temperatureRange = (temperature: number) => css`
  width: ${temperature}%;
  height: 100%;
  border-radius: 10px;
  background: ${theme.color.point.alternative};
  animation: grow 0.5s ease-out;

  @keyframes grow {
    from {
      width: 0%; 
    }
    to {
      width: ${temperature}%; 
    }
  }
`
