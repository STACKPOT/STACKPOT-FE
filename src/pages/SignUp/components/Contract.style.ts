import { css } from "@emotion/react"
import theme from "@styles/theme"

export const container = css`
    display: flex;
    align-items: center;
    gap: 1rem;
`
export const contractStyle =css`
    ${theme.font.caption3}
    color: ${theme.color.object.assistive};
    width: 44rem;
`
export const detailButtonStyle =css`
    ${theme.font.caption3}
    color: ${theme.color.feedback.positive};
    text-decoration: solid underline;
    background-color: transparent;
    border: none;
    cursor: pointer;
`