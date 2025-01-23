import { css } from "@emotion/react";
import theme from "@styles/theme";

export const modalStyle = css`
    display: flex;
    width: 73.5rem;
    height: 41.7rem;
    padding: 3.2rem;
    border-radius: 2.4rem;
    border: 1px solid ${theme.color.object.alternative};
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    background-color: white;
`
export const closeIconStyle = css`
    right: 0;
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
    display: grid;
    grid-row: repeat(2,1fr);
    grid-column-gap: 1.6rem;
`
export const memberContainer = css`
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-top: 3.2rem;
`
export const profileStyle = css`
    width: 4rem;
    height: 4rem;
    border: 1px solid ${theme.color.object.alternative};
    border-radius: 50%;
`
export const nicknameStyle = css`
    ${theme.font.caption1};
    color: ${theme.color.object.assistive};
`
export const kakaoIdStyle = css`
    ${theme.font.caption1};
    color: ${theme.color.point.hero};;
`