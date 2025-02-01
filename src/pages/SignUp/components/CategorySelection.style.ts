import { css } from "@emotion/react"
import theme from "@styles/theme"

export const container = (type: "stack" | "interest") => css`
    display: flex;
    align-items: center;
    gap: ${(type === "stack" && "3.6rem") || "2rem"};
`
export const titleStyle = css`
    ${theme.font.caption3}
    color: ${theme.color.base.black};
`
export const categoriesContainer = css`
    display: flex;
    gap: 0.8rem;
`