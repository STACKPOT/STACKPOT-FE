import { css } from "@emotion/react";
import theme from "@styles/theme";

export const cardStyle = css`
    width: 27.2rem;
    height: 23.9rem;
    padding: 1.6rem;
    border-radius: 1.6rem;
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
    justify-content: space-between;
`
export const profileContainer = css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.2rem;
`
export const profileImageStyle = css`
    width: 4rem;
    height: 4rem;
    border-radius: 75%;
`
export const nicknameStyle = css`
    ${theme.font.caption1}
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.4rem;
    letter-spacing: -0.072px;
    color: ${theme.color.object.assistive};
`
export const ddayStyle = css`
    height: 1.9rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 3.2rem;
    background-color: ${theme.color.point.gray};
    color: white;
    ${theme.font.captionBold1}
    letter-spacing: -0.128px;
    line-height: 1.6rem;
    font-weight: 600;
`
export const titleStyle = css`
    ${theme.font.bodyBold1}
    color: ${theme.color.base.darkgray};
    font-weight: 700;
    letter-spacing: -0.128px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`
export const contentContainer = css`
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
export const contentStyle = css`
    ${theme.font.caption2}
    color: ${theme.color.object.hero};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`
export const buttonContainer = css`
    height: 2.8rem;
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