import { css } from "@emotion/react"
import theme from "@styles/theme"

export const container = css`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`
export const dividerStyle = css`
    height: 0.1rem;
    background-color: ${theme.color.object.alternative};
`
export const headerContainer = css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`
export const titleButtonContainer = css`
    display: flex;
    justify-content: space-between;
`
export const titleContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.6rem;
`
export const titleStyle = css`
    ${theme.font.bodyBold2};
    color: ${theme.color.base.darkgray};
`
export const titleBlueStyle = css`
    ${theme.font.bodyBold2};
    color: ${theme.color.point.hero};
`
export const titleIconStyle = css`
    color: ${theme.color.point.hero};
    width: 2.4rem;
    height: 2.4rem;
`
export const descriptionStyle = css`
    ${theme.font.caption3}
    color: ${theme.color.object.assistive};
`
export const listContainer = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 3.2rem;
    grid-column-gap: 1.6rem;
`

export const nicknameStyle = css`
    ${theme.font.caption1}
    color: ${theme.color.object.assistive};
`
export const applicantContainer = css`
    display: inline-flex;
    align-items: center;
    gap: 1.6rem;
    padding: 2rem 3rem;
    border-radius: 16px;
    border: 1px solid ${theme.color.object.alternative};
    box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
    cursor: pointer;

    &:hover p {
        color: ${theme.color.base.darkgray};
        text-decoration-line: underline;
        text-decoration-style: solid;
    }
`
export const profileStyle = css`
    width: 4rem;
    height: 4rem;
    border: 1px solid ${theme.color.object.alternative};
    border-radius: 50%;
`