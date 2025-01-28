import { css } from "@emotion/react"
import theme from "@styles/theme"

export const contentStyle = (height: string) => css`
    height: ${height};
    width: 100%;
    display: flex;
    ${theme.font.caption3};
    color: ${theme.color.object.assistive};
    white-space: pre-line;
    align-items: center;
`