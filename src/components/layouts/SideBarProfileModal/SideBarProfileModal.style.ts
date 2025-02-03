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
    height: 1.2rem;
    width: 1.2rem;
    padding: 0.2rem;
    margin-left: auto;
    margin-right: 0.9rem;
    color: ${theme.color.interactive.inactive};
    cursor: pointer;
`
export const profileContainer = css`
    display: flex;
    gap: 1.6rem;
    align-items: center;
`
export const profileStyle = css`
    width: 4rem;
    height: 4rem;
    border: 1px solid ${theme.color.object.alternative};
    border-radius: 50%;
`
export const nicknameStyle = css`
    ${theme.font.caption2}
    color: ${theme.color.base.darkgray};
`
export const dividerStyle = css`
    width: 100%;
    height: 1px;
    margin-top: 1.6rem;
    background-color: ${theme.color.object.alternative};
`
export const buttonContainer = css`
    height: 3.2rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
`
export const buttonDividerStyle = css`
    width: 1px;
    background-color: ${theme.color.object.alternative};
`
export const buttonStyle = (type: "myPage" | "logout") => css`
    ${theme.font.caption1};
    font-family: "Pretendard";
    color: ${theme.color.base.darkgray};
    border: none;
    background-color: white;
    white-space: pre;
    cursor: pointer;
    transition-duration: 300ms;
    transition: ease-out;

    &:hover {
        text-decoration: underline;
        color: ${type === "myPage" ? theme.color.point.hero : theme.color.feedback.negative};
    }
`
