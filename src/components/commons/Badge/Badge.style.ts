import { css } from "@emotion/react";
import theme from "@styles/theme";

export const badgeStyle = (backgroundColor:string, borderColor:string, textColor:string) =>css`
    display: inline-flex;
    height: 2.2rem;
    padding: 0.4rem 1.5rem;
    border-radius: 3.2rem;
    border: 0.1rem solid ${borderColor};
    background-color: ${backgroundColor};
    color: ${textColor};
    ${theme.font.caption1}
    font-weight: 500;
    white-space: nowrap;
`