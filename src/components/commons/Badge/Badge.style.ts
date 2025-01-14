import { css } from "@emotion/react";
import theme from "@styles/theme";

export const badgeStyle = (color:string) =>css`
    display: inline-flex;
    height: 4rem;
    padding: 1.2rem 2.4rem;
    border-radius: 3.2rem;
    border: 0.1rem solid ${theme.color.border.normal};
    background-color: ${color};
    color: white;
    ${theme.font.captionBold1}
    line-height: 1.6rem;
    letter-spacing: -0.128px;
    font-weight: 600;
    white-space: nowrap;
`