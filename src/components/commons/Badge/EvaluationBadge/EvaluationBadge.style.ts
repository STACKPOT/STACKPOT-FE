import { css } from "@emotion/react";
import theme from "@styles/theme";

export const badgeStyle = css`
    height: 4rem;
    display: inline-flex;
    padding: 1.2rem 2.4rem;
    align-items: center;
    justify-content: center;
    border-radius: 3.2rem;
    border: 0.1rem solid rgba(112, 115, 124, 0.20);
    background-color: ${theme.color.point.alternative};
`
export const textStyle = css`
    ${theme.font.captionBold1}
    color: white;
`
export const emojiStyle = css`
    width: 1.6rem;
    height: 1.6rem;
`