import { css } from "@emotion/react"
import theme from "@styles/theme"

export const cardStyle = css`
    width: 88.8rem;
    height: 35.8rem;
    padding: 3.2rem 2.4rem;
    border-radius: 1.6rem;
    background-color: white;
    box-shadow:  0px 0px 1px 0px rgba(0, 0, 0, 0.04);
    border: 0.1rem solid ${theme.color.object.alternative};
`

export const innerContainerStyle = css`
    width: 100%;
    height: 27.3rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`

export const titleContainer = css`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.6rem;
`

export const profileImageStyle = css`
    width: 4rem;
    height: 4rem;
    border-radius: 70%;
    border: 0.1rem solid rgba(112, 115, 124, 0.20);
    object-fit: cover;
`
export const nicknameStyle = css`
    width: 14.4rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    ${theme.font.body1}
    color:${theme.color.object.assistive} ;
`

export const dateStyle = css`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${theme.color.interactive.inactive};
`

export const titleStyle = css`
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.12px;
    color: ${theme.color.base.darkgray};
`
export const contentContainer = css`
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
export const contentStyle = css`
    ${theme.font.caption3}
    color: ${theme.color.object.assistive};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

export const buttonContainer = css`
    height: 3.2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2.4rem;
`

export const likeConatiner = css`
    display: flex;
    padding: var(--gap-5xs, 2px) var(--gap-empty, 0px);
    align-items: center;
    gap: var(--gap-2xs, 8px);
`

export const likeTextStyle = css`
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.108px;
    color: ${theme.color.interactive.inactive};
`