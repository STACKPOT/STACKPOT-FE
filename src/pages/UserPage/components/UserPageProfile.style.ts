import { css } from "@emotion/react"
import theme from "@styles/theme"

export const profileContainer = css`
    display: flex;
    gap: 4.8rem;
`
export const profileStyle = css`
    width: 12.8rem;
    height: 12.8rem;
    border: 1px solid ${theme.color.object.alternative};
    border-radius: 50%;
`
export const contentContainer = css`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const nicknameStyle = css`
    ${theme.font.bodyBold2};
    color: ${theme.color.base.darkgray};
`

export const introductionStyle = css`
    ${theme.font.caption3};
    color: ${theme.color.object.hero};
    margin-top: 0.4rem;
`