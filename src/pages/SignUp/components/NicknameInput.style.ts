import { css } from "@emotion/react"
import theme from "@styles/theme"

export const container = css`
    display: flex;
    flex-direction: column;
`
export const inputContainer = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const inputStyle =css`
    width: 38rem;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
    ${theme.font.caption3};
    border: 1px solid ${theme.color.object.alternative};
    color: ${theme.color.point.hero};
    
    ::placeholder {
        color: ${theme.color.interactive.inactive};
    }

    &:focus {
        border: 1px solid ${theme.color.feedback.negative};
        outline: none;
        color: ${theme.color.interactive.inactive};
    }
`
export const inputDoneStyle =css`
    ${inputStyle};
    border-color: ${theme.color.point.hero};
`
export const messageStyle =css`
    ${theme.font.caption2};
    color: ${theme.color.feedback.positive};
`
export const messageWarningStyle =css`
    ${theme.font.caption2};
    color: ${theme.color.feedback.negative};
`
export const buttonStyle =css`
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2.4rem;
    border-radius: 0.8rem;
    border: 1px solid ${theme.color.object.alternative};
    color: white;
    background-color: ${theme.color.point.navy};
    cursor: pointer;
`