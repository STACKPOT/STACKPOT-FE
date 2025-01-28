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
export const modalStyle = css`
    display: flex;
    width: 73.5rem;
    padding: 3.2rem;
    border-radius: 24px;
    border: 1px solid ${theme.color.object.alternative};
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    background-color: white;
`
export const closeIconStyle = css`
    margin-left: auto;
    cursor: pointer;
`
export const container = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const titleStyle = css`
    ${theme.font.title1};
    color: ${theme.color.base.black};
`
export const descriptionStyle = css`
    ${theme.font.caption3};
    color: ${theme.color.object.assistive};
    margin-top: 1.6rem;
`
export const descriptionBlueStyle = css`
    ${theme.font.caption3};
    color: ${theme.color.point.hero};
`
export const membersContainer = css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3,22rem);
    grid-row-gap: 3.2rem;
    grid-column-gap: 0.8rem;
    justify-content: space-between;
    margin-top: 3.2rem;
`
export const memberContainer = css`
    display: flex;
    gap: 1.4rem;
    align-items: center;
`
export const profileStyle = css`
    width: 4.4rem;
    height: 4.4rem;
    border: 1px solid ${theme.color.object.alternative};
    border-radius: 50%;
`
export const nicknameIdContainer = css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`
export const nicknameStyle = css`
    ${theme.font.caption1};
    color: ${theme.color.object.assistive};
`
export const kakaoIdStyle = css`
    ${theme.font.caption1};
    color: ${theme.color.point.hero};;
`