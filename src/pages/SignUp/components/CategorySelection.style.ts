import { css } from "@emotion/react"
import theme from "@styles/theme"

export const container  = (gap:string)=>css`
    display: flex;
    align-items: center;
    gap: ${gap};
`
export const titleStyle =css`
    ${theme.font.caption3}
    color: ${theme.color.base.black};
`
export const categoriesContainer = css`
    display: flex;
    gap: 0.8rem;
`