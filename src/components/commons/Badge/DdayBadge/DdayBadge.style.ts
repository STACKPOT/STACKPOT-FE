import { css } from "@emotion/react";
import theme from "@styles/theme";

export const badgeStyle = css`
    display: inline-flex;
    width: 5rem;
    padding: 0.4rem 1.5rem;
    justify-content: center;
    border-radius: 32px;
    border: 1px solid ${theme.color.feedback.negative};
    background: ${theme.color.base.white};
    color: ${theme.color.feedback.negative};
    ${theme.font.caption1};
    white-space: nowrap;
`