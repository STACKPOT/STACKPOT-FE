import { css } from "@emotion/react";
import theme from "@styles/theme";

export const badgeStyle =(textColor:string, backgroundColor:string) => css`
    height: 4rem;
    display: inline-flex;
    align-items: center;
    padding: 0.6rem 2.4rem;
    background-color: ${backgroundColor};
    color: ${textColor};
    border-radius: 3.2rem;
    border: 0.1rem solid rgba(112, 115, 124, 0.20);
    ${theme.font.captionBold1}
    font-weight: 600;
`