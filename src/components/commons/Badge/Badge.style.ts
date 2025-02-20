import { css } from "@emotion/react";
import theme from "@styles/theme";

export const badgeStyle = css`
    display: inline-flex;
    padding: 0.4rem 1.8rem;
    border-radius: 32px;
    border: 1px solid ${theme.color.border.normal};
    background-color: ${theme.color.point.normal};
    color: ${theme.color.base.white};
    ${theme.font.caption1}
    white-space: nowrap;
`