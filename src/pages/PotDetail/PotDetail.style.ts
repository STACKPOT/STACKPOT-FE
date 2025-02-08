import { css } from "@emotion/react";
import theme from "@styles/theme";

export const containerStyle = css`
    width: 90.8rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    padding: 4.8rem 0;
`
export const bodyContainerStyle = css`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`
export const sectionContainerStyle = css`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`
export const dividerStyle = css`
    height: 0.1rem;
    background-color: ${theme.color.object.alternative};
`
export const contentStyle = css`
    ${theme.font.body2};
    color: ${theme.color.base.black};
    white-space: pre-line;
    word-break: keep-all;
`