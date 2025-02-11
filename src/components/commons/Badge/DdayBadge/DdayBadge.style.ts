import { css } from "@emotion/react";
import theme from "@styles/theme";

export const badgeStyle = css`
    display: inline-flex;
    width: 6.5rem;
    height: 2.1rem;
    padding: 0.4rem 0;
    justify-content: center;
    border-radius: 32px;
    border: 1px solid ${theme.color.feedback.negative};
    background-color: ${theme.color.base.white};
    color: ${theme.color.feedback.negative};
    ${theme.font.caption1};
    white-space: nowrap;
`