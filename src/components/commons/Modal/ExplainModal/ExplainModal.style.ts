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
export const containerStyle = css`
    width: 50rem;
    padding: 2.6rem 2.4rem;
    border-radius: 2.4rem;
    border: 1px solid ${theme.color.object.alternative};
    background-color: ${theme.color.base.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
`
export const closeButtonStyle = css`
    margin-left: auto;
    cursor: pointer;
`
export const contentButtonContainerStyle = css`
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    align-items: center;
`
export const titleContentContainerStyle = css`
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
export const textStyle = css`
    ${theme.font.caption3}
`