import { css } from "@emotion/react";
import theme from "@styles/theme";

export const buttonStyle = css`
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 50%;
    background-color: ${theme.color.object.normal};
    color: ${theme.color.interactive.inactive};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;

    &:active {
        background-color: ${theme.color.point.alternative};
    }
`
export const arrowIconStyle = (direction: "left" | "right") => css`
    width: 2.4rem;
    height: 2.4rem;
    ${direction === "right" && "transform: scaleX(-1)"};

    &:active{
        color: ${theme.color.point.ivory};
    }
`