import { css } from "@emotion/react"
import theme from "@styles/theme"

export const cardStyle = css`
    width: 88.8rem;
    height: 31.3rem;
    padding: 2rem 3rem;
    border-radius: 2.4rem;
    background-color: white;
    box-shadow:  0px 4px 12px 0px rgba(13, 10, 44, 0.06);
    border: 0.1rem solid ${theme.color.object.alternative};
`
export const innerContainerStyle = css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const profileDateContainer = css`
    height: 7.4rem;
    display: flex;
    flex-direction: column;
`
export const profileContainer = css`
    height: 4.6rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;
`
export const profileImageStyle = css`
    width: 4rem;
    height: 4rem;
    border: 0.1rem solid ${theme.color.object.alternative};
    border-radius: 50%;
`
export const nicknameStyle = css`
    height: 4.6rem;
    padding: 1rem;
    ${theme.font.body1}
    color:${theme.color.object.assistive} ;
`

export const dateStyle = css`
    color: ${theme.color.interactive.inactive};
    ${theme.font.caption2}
`

export const titleStyle = css`
    color: ${theme.color.base.darkgray};
    ${theme.font.title1}
`
export const contentStyle = css`
    height: 6rem;
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
`
export const likeConatiner = css`
    display: flex;
    padding: 0.2rem 0;
    align-items: center;
    gap: 0.8rem;
`
export const likeTextStyle = css`
    ${theme.font.label3}
    color: ${theme.color.interactive.inactive};
`
export const likeIconUnfilledStyle = css`
    width: 2.2rem;
    height: 2.2rem;
    fill: ${theme.color.interactive.inactive};
`
export const likeIconfilledStyle = css`
    width: 2.2rem;
    height: 2.2rem;
    fill: ${theme.color.feedback.negative};
`