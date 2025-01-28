import { css } from "@emotion/react"
import theme from "@styles/theme"

export const container = css`
    display: flex;
    align-items: center;
    gap: 2rem;
`
export const profileStyle = css`
    width: 4rem;
    height: 4rem;
    border: 1px solid ${theme.color.object.alternative};
    border-radius: 50%;
`
export const nicknameStyle = css`
    ${theme.font.bodyBold1};
    color: ${theme.color.object.assistive};
`