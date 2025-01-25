import { css } from "@emotion/react"
import theme from "@styles/theme"

export const sectionContainer = css`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`
export const titleContainer = css`
    display: flex;
    gap: 1.6rem;
    align-items: center;
`
export const titleStyle = css`
    ${theme.font.bodyBold2};
    color: ${theme.color.base.darkgray};
`
export const potIconStyle = css`
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.color.point.hero};
`
export const potsContainer = css`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`