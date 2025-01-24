import { css } from "@emotion/react"
import theme from "@styles/theme"

export const container = css`
    display: flex;
    gap: 17rem;
`
export const columnContainer = css`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
`
export const elementContainer = css`
    display: flex;
    gap: 2.6rem;
`
export const elementTitleStyle = css`
    ${theme.font.body1}
    color: ${theme.color.interactive.inactive};
`
export const elementContentStyle = css`
    ${theme.font.body1};
    color: ${theme.color.base.darkgray};
`