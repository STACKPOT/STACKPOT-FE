import { css } from "@emotion/react"

export const orderedListItemStyle = css`
    list-style-position: inside;
    text-indent: -1.8rem;
    margin-left: 1.8rem;
`
export const unorderedListItemStyle = css`
    list-style-position: inside;
    text-indent: -2rem;
    margin-left: 2.2rem;
    list-style-type: disc;
    span{
       position: relative;
       left: -0.6rem;
    }
`
export const normalTextStyle = css`
    list-style-position: inside;
    list-style-type: none;
`