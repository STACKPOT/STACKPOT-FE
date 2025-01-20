import { css } from "@emotion/react"
import theme from "@styles/theme"

export const container =css`
    height: 8.3rem;
    display: flex;
    padding: 2rem 3rem;
    align-items: center;
    border-radius: 1.6rem;
    border: 0.1rem solid ${theme.color.object.alternative};
    box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
    background-color: ${theme.color.base.white};
`
export const innerContainer = css`
    display: flex;
    gap: 6.4rem;
    align-items: center;
`
export const profileNicknameContainer =css`
    display: flex;
    gap: 2rem;
    align-items: center;
`
export const nicknameStyle =css`
    ${theme.font.caption1}
    color: ${theme.color.object.assistive};
`
export const profileStyle = css`
    width: 4rem;
    height: 4rem;
    border: 0.1rem solid ${theme.color.object.alternative};
    border-radius: 50%;
`