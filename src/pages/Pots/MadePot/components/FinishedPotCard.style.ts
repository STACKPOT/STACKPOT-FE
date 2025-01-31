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
    align-items: center;
`
export const titleStyle = css`
    ${theme.font.title1};
    color: ${theme.color.base.darkgray};
`