import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    padding: 3.8rem;
    border-radius: 24px;
    border: 1px solid ${theme.color.object.alternative};
    box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
    cursor: pointer;
`
export const titleContainer = css`
    display: flex;
    justify-content: space-between;
    height: 4rem;
    align-items: center;
`
export const titleProfileContainer = css`
    display: flex;
    flex-direction: column;
`
export const profileContainer = css`
    display: flex;
`
export const titleStyle = css`
    ${theme.font.title1};
    color: ${theme.color.base.darkgray};
`

export const gridContainer = css`
    display: grid;
    grid-template-columns: max-content max-content;
    column-gap: 17rem;
    row-gap: 1.8rem;
`
export const elementContainer = css`
    display: flex;
    gap: 2.4rem;
`
export const teamElementContainer = css`
    display: flex;
    gap: 4rem;
`
export const elementTitleStyle = css`
    ${theme.font.body1}
    color: ${theme.color.interactive.inactive};
`
export const elementContentStyle = css`
    ${theme.font.body1};
    color: ${theme.color.base.darkgray};
`