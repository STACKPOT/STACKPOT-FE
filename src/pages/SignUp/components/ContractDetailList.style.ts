import { css } from "@emotion/react"

export const orderedListStyle = css`
    list-style-position: inside;
`
export const unOrderedListStyle = css`
    list-style-position: inside;
    list-style-type: disc;
`
export const listItemStyle = (style: string | undefined) => css`
    list-style-position: inside;
    list-style: ${style};
`