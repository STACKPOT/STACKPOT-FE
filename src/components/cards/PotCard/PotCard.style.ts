import { css } from "@emotion/react";
import theme from "@styles/theme";

export const cardStyle = css`
    width: 27.2rem;
    padding: 1.6rem;
    border-radius: 2.4rem;
    background-color: white;
    box-shadow:  0px 0px 1px 0px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border: 0.1rem solid ${theme.color.object.alternative};
`
export const titleContainer = css`
    height: 4rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
`
export const profileImageStyle = css`
    width: 4rem;
    height: 4rem;
`
export const nicknameDdayContainer = css`
    display: flex;
    align-items: center;
    gap: 0.4rem;
`
export const nicknameStyle = css`
    width: 10.6rem;
    ${theme.font.caption1}
    font-weight: 500;
    color: ${theme.color.object.assistive};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`
export const titleStyle = css`
    ${theme.font.bodyBold1}
    color: ${theme.color.base.darkgray};
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`
export const contentStyle = css`
    height: 6rem;
    ${theme.font.caption2}
    color: ${theme.color.object.hero};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`
export const buttonContainer = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const saveContainer = css`
    height: 2.8rem;
    display: flex;
    padding: 0.2rem 0;
    align-items: center;
    gap: 0.8rem;
`
export const saveTextStyle = css`
    ${theme.font.label3}
    color: ${theme.color.interactive.inactive};
`