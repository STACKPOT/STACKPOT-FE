import { css } from "@emotion/react"
import theme from "@styles/theme"

export const container = (bottom: string) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    bottom: ${bottom};
`
export const contentStyle = css`
    display: flex;
    align-items: center;
    width: 23.1rem;
    height: 6.7rem;
    padding: 0.8rem 1.6rem;
    border-radius: 12px;
    background-color: ${theme.color.object.hero};
    color: ${theme.color.object.normal};
    ${theme.font.caption1};
    word-wrap: break-word;
    white-space: pre-wrap;
`
export const pinStyle = css`
    height: 1.2rem;
    color: ${theme.color.object.hero};
    margin-top: -0.3rem;
`
export const iconStyle = css`
    width: 1.7rem;
    height: 1.7rem;
    cursor: pointer;
`