import { css } from "@emotion/react";
import theme from "@styles/theme";

export const buttonStyle = css`
    display: inline-flex;
    padding: 1.4rem 1.9rem;
    border-radius: 0.8rem;
    background-color: ${theme.color.base.white};
    box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
    transition: all 0.3s ease;
    ${theme.font.caption3};
    align-items: center;
    white-space: pre;
    cursor: pointer;
`
export const blueButtonStyle = css`
    ${buttonStyle}
    border: 0.1rem solid ${theme.color.point.alternative};
    color: ${theme.color.point.hero};

    &:active{
        border: 0.1rem solid ${theme.color.point.hero};
        background-color: ${theme.color.point.hero};
        color: ${theme.color.base.white};
    }
`
export const redButtonStyle = css`
    ${buttonStyle}
    background-clip: padding-box;
    border: 0.1rem solid ${theme.color.feedback.negative_transparent};
    color: ${theme.color.feedback.negative};

    &:active{
        background-color: ${theme.color.feedback.negative_transparent};
        color: ${theme.color.base.white};
    }
`