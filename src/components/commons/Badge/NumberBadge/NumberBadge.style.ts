import { css } from "@emotion/react";
import theme from "@styles/theme";

export const badgeStyle = css`
    height: 3.5rem;
    display: inline-flex;
    padding: 1rem 2rem;
    border-radius: 3.2rem;
    background-color: ${theme.color.interactive.inactive};
    color: white;
    ${theme.font.caption2}
    line-height: 1.5rem;
`