import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
    display: flex;
    justify-content: space-between;
    padding: 2rem 3rem;
    height: 8.4rem;
    border-radius: 16px;
    border: 1px solid ${theme.color.object.alternative};
    box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
    cursor: pointer;
`
export const contentContainer = css`
    display: flex;
    gap: 1.6rem;
    align-items: center;
`
export const titleStyle = css`
    ${theme.font.bodyBold1};
    color: ${theme.color.point.hero};
    max-width: 57.1rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`
export const buttonContainer = css`
    margin-left: auto;
`