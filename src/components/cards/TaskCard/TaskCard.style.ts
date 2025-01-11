import { css } from "@emotion/react";
import theme from "@styles/theme";

export const cardStyle = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    width: 42.1rem;
    height: 35.1rem;
    padding: 1.6rem;
    border-radius: 1.6rem;
    border: 0.1rem solid ${theme.color.object.alternative};
    background-color: white;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04);
`
export const moreButtonContainer = css`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    height: 2.8rem;
`
export const titleContainer = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
`
export const titleTextStyle = css`
    ${theme.font.bodyBold1}
    color: ${theme.color.base.darkgray};
    font-weight: 700;
`
export const contentTextStyle = css`
    height: 6rem;
    width: 100%;
    ${theme.font.caption2}
    color: ${theme.color.object.hero};
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`
export const dateContainer = css`
    height: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.8rem;
`
export const dateTextStyle = css`
    ${theme.font.label1}
    color: ${theme.color.object.assistive};
`
export const lineStyle = css`
    width: 100%;
    height: 0;
    border: 0.1rem solid ${theme.color.object.alternative};
`
export const profileContainer = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
`
export const profileImageStyle = css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    border-radius: 75%;
`
export const nicknameStyle = css`
    ${theme.font.label1}
    color: ${theme.color.object.assistive};
`