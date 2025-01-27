import { css } from "@emotion/react"
import theme from "@styles/theme"

export const modalBackgroundContainer = css`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.40);
`
export const contentStyle = (height: string) => css`
    height: ${height};
    display: flex;
    ${theme.font.caption3};
    color: ${theme.color.object.assistive};
    white-space: pre-line;
    text-align: center;
    align-items: center;
`