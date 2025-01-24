import { css } from "@emotion/react"
import theme from "@styles/theme"

export const container = css`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`
export const headerContainer = css`
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

export const titleIconStyle = css`
    color: ${theme.color.point.hero};
    width: 2.4rem;
    height: 2.4rem;
`
export const buttonStyle = css`
    height: 4.4rem;
    border-radius: 8px;
    border: none;
    background-color: ${theme.color.point.hero};
    color: white;
    ${theme.font.bodyBold1};
    cursor: pointer;
    width: 20.4rem;
`
export const listContainer = css`
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 16px;
    border: 1px solid ${theme.color.object.alternative};
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04);
`
export const memberContainer = css`
    display: flex;
    align-items: center;
`
export const profileStyle = css`
    width: 4rem;
    height: 4rem;
    border: 1px solid ${theme.color.object.alternative};
    border-radius: 50%;
    cursor: pointer;
`
export const nicknameStyle = css`
    ${theme.font.caption1};
    color: ${theme.color.object.assistive};
    margin-left: 2rem;
`