import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
    display: flex;
    justify-content: center;
    padding: 6.4rem 0;
    background-color: ${theme.color.base.white};
`
export const mainContainer = css`
    display: flex;
    flex-direction: column;
    gap: 4.4rem;
    width: 71.3rem;
    padding: 4.5rem 8.2rem;
    border: 1px solid ${theme.color.object.alternative};
    border-radius: 8px;
`
export const headerContainer = css`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`
export const headerStyle = css`
    ${theme.font.bodyBold2}
    color: ${theme.color.base.darkgray};
`
export const dividerStyle = css`
    height: 0.1rem;
    background-color: ${theme.color.object.alternative};
`
export const bodyContainer = css`
    display: flex;
    flex-direction: column;
    gap: 5.6rem;
`
export const categoryContainer = css`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`