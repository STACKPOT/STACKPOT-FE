import { css } from "@emotion/react";
import theme from "@styles/theme";

export const modalBackgroundContainer =css`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.40);
`
export const profileContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`
export const profileStyle =css`
    width: 6.4rem;
    height: 6.4rem;
    border: 1px solid ${theme.color.object.alternative};
    border-radius: 50%;
`
export const nicknameStyle =css`
    ${theme.font.bodyBold1};
    color: ${theme.color.object.assistive};
`