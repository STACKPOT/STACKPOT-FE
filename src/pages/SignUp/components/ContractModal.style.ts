import { css } from "@emotion/react"
import theme from "@styles/theme"

export const contentStyle = (type: "service" | "privacy") => css`
    height: ${(type === "service" && "38.7rem") || "41.7rem"};
    width: 100%;
    display: flex;
    ${theme.font.caption3};
    color: ${theme.color.object.assistive};
    white-space: pre-line;
    align-items: center;
`