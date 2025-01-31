import { css, keyframes } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  width: 37.9rem;
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