import { css } from "@emotion/react"
import theme from "@styles/theme"

export const sectionContainer = css`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`
export const titleContainer = css`
    display: flex;
    gap: 0.8rem;
    align-items: center;
`
export const titleStyle = css`
    ${theme.font.bodyBold2};
    color: ${theme.color.base.darkgray};
`
export const potIconStyle = css`
    width: 2.4rem;
    height: 2.2rem;
    color: ${theme.color.point.hero};
`
export const potCardsContainer = css`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`