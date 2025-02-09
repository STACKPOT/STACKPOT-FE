import { css } from "@emotion/react";
import theme from "@styles/theme";

export const cardStyle = css`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    height: 8.4rem;
    padding: 2rem 3rem;
    border: 1px solid ${theme.color.object.alternative};
    border-radius: 16px;
    box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
    cursor: pointer;
`
export const potNameStyle = css`
    ${theme.font.bodyBold1};
    color: ${theme.color.point.hero};
    width: 57.1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`