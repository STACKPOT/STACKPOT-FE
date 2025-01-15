import { css } from "@emotion/react";
import theme from "@styles/theme";

export const cardStyle = css`
    width: 34rem;
    height: 39.9rem;
    padding: 1.6rem 2rem;
    border-radius: 2.4rem;
    border: 0.1rem solid ${theme.color.object.alternative};
    background-color: white;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04);
`
export const innerContaienr = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
`
export const moreButtonContainer = css`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
export const titleContainer = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
`
export const titleTextStyle = css`
    ${theme.font.bodyBold1}
    color: ${theme.color.base.darkgray};
    font-weight: 700;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`
export const contentTextStyle = css`
    height: 6rem;
    ${theme.font.caption2}
    color: ${theme.color.object.hero};
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`
export const dateContainer = css`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`
export const dateTextStyle = css`
    ${theme.font.caption2}
    color: ${theme.color.object.assistive};
`
export const lineStyle = css`
    width: 100%;
    height: 0;
    border: 0.1rem solid ${theme.color.object.alternative};
`
export const profileContainer = css`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`
export const profileImageStyle = css`
    width: 4rem;
    height: 4rem;
    border: 0.1rem solid ${theme.color.object.alternative};
    border-radius: 50%;
`
export const nicknameStyle = css`
    ${theme.font.caption1}
    font-weight: 500;
    color: ${theme.color.object.assistive};
`