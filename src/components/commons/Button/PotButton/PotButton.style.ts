import { css } from "@emotion/react";
import theme from "@styles/theme";

export const buttonStyle = css`
    display: inline-flex;
    padding: 1.2rem 2.4rem;
    border-radius: 0.8rem;
    border: 0.1rem solid ${theme.color.point.alternative};
    background-color: ${theme.color.base.white};
    color: ${theme.color.point.hero};
    box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
    ${theme.font.captionBold1};
    transition: all 0.3s ease;

    &:active{
        border: 0.1rem solid ${theme.color.point.hero};
        background-color: ${theme.color.point.hero};
        color: ${theme.color.base.white};
    }
`