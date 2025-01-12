import { css } from "@emotion/react";
import theme from "@styles/theme";

export const badgeStyle = (color: string) => css`
    display: inline-flex;
    padding: 0.8rem 1.2rem;
    background-color: ${color};
    color: white;
    border: none;
    border-radius: 3.2rem;
    ${theme.font.captionBold1}
    line-height: 1.9rem;
`