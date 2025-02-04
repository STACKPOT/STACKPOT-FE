import { css } from "@emotion/react"
import theme from "@styles/theme"

export const container = css`
    display: flex;
    gap: 1.2rem;
`
export const inputContainer = css`
    width: 38rem;
`
export const buttonContainer = css`
    display: flex;
    padding: 0.6rem 0;
    justify-content: center;
`
export const buttonStyle = css`
    height: 4rem;
    padding: 0 2.4rem;
    border-radius: 8px;
    border: 1px solid ${theme.color.object.alternative};
    color: white;
    background-color: ${theme.color.point.navy};
    cursor: pointer;
    ${theme.font.captionBold1};
    font-family: "Pretendard";
`