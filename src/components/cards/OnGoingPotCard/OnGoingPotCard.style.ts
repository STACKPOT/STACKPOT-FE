import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
    display: flex;
    justify-content: space-between;
    padding: 2rem 3rem;
    border-radius: 16px;
    border: 1px solid ${theme.color.object.alternative};
    box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
    cursor: pointer;
`
export const contentContainer = css`
    display: flex;
    gap: 5rem;
    align-items: center;
`
export const myPotIconStyle = css`
    height: 2rem;
    width: 2rem;
    color: ${theme.color.interactive.inactive};
`
export const titleStyle = css`
    ${theme.font.bodyBold1};
    color: ${theme.color.point.hero};
`