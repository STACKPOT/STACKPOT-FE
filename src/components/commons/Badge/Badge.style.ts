import { css } from "@emotion/react";
import theme from "@styles/theme";

export const badgeStyle = css`
    display: inline-flex;
    height: 2.2rem;
    padding: 0.4rem 1.5rem;
    border-radius: 3.2rem;
    border: 0.1rem solid ${theme.color.border.normal};
    background-color: ${theme.color.point.normal};
    color: ${theme.color.base.white};
    ${theme.font.caption1}
    white-space: nowrap;
`