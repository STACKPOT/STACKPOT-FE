import { css } from "@emotion/react";
import theme from "@styles/theme";

export const badgeStyle = css`
    display: inline-flex;
    padding: 0.6rem 2.4rem;
    border-radius: 3.2rem;
    background-color: ${theme.color.point.gray};
    color: white;
    ${theme.font.captionBold1}
    letter-spacing: -0.128px;
    line-height: 1.9rem;
    font-weight: 600;
`