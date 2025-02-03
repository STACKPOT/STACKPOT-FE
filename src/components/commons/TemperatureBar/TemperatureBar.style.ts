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
export const popoverContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    bottom: 1.75rem;
`
export const popoverContentStyle = css`
    display: flex;
    align-items: center;
    width: 23.1rem;
    height: 6.7rem;
    padding: 0.8rem 1.6rem;
    border-radius: 12px;
    background-color: ${theme.color.object.hero};
    color: ${theme.color.base.white};
    ${theme.font.caption1};
    word-wrap: break-word;
`
export const popoverPinStyle = css`
    height: 1.2rem;
    color: ${theme.color.object.hero};
    margin-top: -0.3rem;
`
export const temperatureInformationIconStyle = css`
    width: 1.7rem;
    height: 1.7rem;
    cursor: pointer;
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
