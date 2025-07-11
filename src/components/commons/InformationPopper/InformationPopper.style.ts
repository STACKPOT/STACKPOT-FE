import { css } from "@emotion/react"
import theme from "@styles/theme"

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const contentStyle = css`
    ${theme.font.body1}
  position: relative;
  display: flex;
  align-items: center;
  width: 36rem;
  padding: 0.4rem 1.2rem;
  border-radius: 8px;
  background-color: ${theme.color.point.gray};
  color: ${theme.color.base.white};
  word-wrap: break-word;
  white-space: pre-wrap;
`;

export const arrowStyle = css`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid ${theme.color.point.gray};
  margin-bottom: -0.4rem;
  align-self: flex-start;
  margin-left: 2.4rem;
`;

export const iconStyle = css`
    width: 1.7rem;
    height: 1.7rem;
    cursor: pointer;
`