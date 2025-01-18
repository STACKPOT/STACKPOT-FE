import { css } from "@emotion/react";
import theme from "@styles/theme";

export const containerStyle = css`
    width: 50rem;
    padding: 1.7rem 2.1rem;
    border-radius: 2.4rem;
    border: 1px solid ${theme.color.object.alternative};
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04);
    background-color: ${theme.color.base.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.7rem;
`
export const closeButtonContainer = css`
    height: 2.8rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const closeButtonStyle = css`
    cursor: pointer;
`
export const contentContainerStyle = css`
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
    align-items: center;
`
export const titleProfileContainerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
`
export const titleStyle = css`
    ${theme.font.title1}
    color: ${theme.color.base.black};
    white-space: pre-wrap;
    text-align: center;
`
export const profileContainerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
`
export const profileStyle = css`
    width: 6.4rem;
    height: 6.4rem;
    border: 1px solid ${theme.color.object.alternative};
    border-radius: 50%;
`
export const nicknameStyle = css`
    ${theme.font.bodyBold1}
    color: ${theme.color.object.assistive};
`
export const buttonStyle =css`
    height: 5rem;
    width: 42.9rem;
    ${theme.font.captionBold1}
    color: ${theme.color.base.white};
    background-color: ${theme.color.point.hero};
    border-radius: 1.6rem;
    border: 1px solid ${theme.color.object.alternative};
    cursor: pointer;
`