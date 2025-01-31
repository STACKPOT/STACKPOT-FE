import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
    width: 25.6rem;
    padding: 1.2rem 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${theme.color.object.alternative};
    border-radius: 16px;
    background-color: white;
    margin-left: 0.8rem;
    top: -4.8rem;
`
export const closeIconStyle = css`
    width: 0.7977rem;
    height: 0.7977rem;
    margin-left: auto;
    cursor: pointer;
`
export const profileContainer = css`
    display: flex;
    gap: 1.6rem;
    align-items: center;
    margin-top: 0.8rem;
`
export const profileStyle = css`
    width: 4rem;
    height: 4rem;
    border: 1px solid ${theme.color.object.alternative};
    border-radius: 50%;
`
export const nicknameStyle = css`
    ${theme.font.caption1}
    color: ${theme.color.base.darkgray};
`
export const dividerStyle = css`
    width: 22.1rem;
    height: 1px;
    margin-top: 2rem;
    background-color: ${theme.color.object.alternative};
`
export const buttonContainer = css`
    display: flex;
    justify-content: center;
`
export const buttonDividerStyle = css`
    width: 1px;
    background-color: ${theme.color.object.alternative};
`
export const buttonStyle = css`
    padding: 1.1rem 2.9rem;
    ${theme.font.caption1};
    color: ${theme.color.base.darkgray};
    border: none;
    background-color: white;
    white-space: pre;
    cursor: pointer;
`
