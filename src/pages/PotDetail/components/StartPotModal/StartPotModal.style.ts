import { css } from "@emotion/react";
import theme from "@styles/theme";

export const modalBackgroundStyle = css`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.40);
`
export const memberListContainer = css`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-row-gap: 2rem;
`
export const memberContainer = css`
    display: flex;
    align-items: center;
    gap: 0.604rem;
`
export const stackNicknameContainer = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.465rem;
`
export const profileStyle = css`
    width: 4rem;
    height: 4rem;
    border: 1px solid ${theme.color.object.alternative};
    border-radius: 50%;
`
export const nicknameStyle = css`
    ${theme.font.bodyBold1};
    color: ${theme.color.object.assistive};
`