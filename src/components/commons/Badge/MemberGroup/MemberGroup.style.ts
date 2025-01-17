import { css } from "@emotion/react";
import theme from "@styles/theme";

export const groupContainer = css`
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-left: 0.5rem;
`
export const profileStyle = css`
    width: 2.2rem;
    height: 2.2rem;
    margin-left: -0.5rem;
    border: 0.1rem solid ${theme.color.object.alternative};
    border-radius: 50%;
`
export const profilePlusStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 2.2rem;
    height: 2.2rem;
    padding: 0.4rem;
    margin-left: -0.5rem;
    border-radius: 50%;
    border: 0.1rem solid ${theme.color.object.alternative};
    background-color: ${theme.color.object.normal};
    color: ${theme.color.interactive.inactive};
    ${theme.font.caption1}
`