import { css } from "@emotion/react";
import theme from "@styles/theme";

export const containerStyle = css`
    width: 90.8rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    padding: 4.8rem 0;
`
export const titleContainerStyle = css`
    display: flex;
    justify-content: space-between;
`
export const titleContentConatinerStyle = css`
    width: 82.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const leftButtonStyle = css`
    height: 4rem;
    display: flex;
    align-items: center;
    padding: 0.4rem;
    border-radius: 0.4rem;
    border: none;
    background-color: transparent;
`
export const leftButtonIconStyle = css`
    width: 2.4rem;
    height: 2.4rem;
`
export const titleStyle = css`
    ${theme.font.bodyBold3}
    color: ${theme.color.base.darkgray};
`
export const profileContainerStyle = css`
    display: flex;
    align-items: center;
    gap: 2rem;
`
export const profileStyle = css`
    width: 4rem;
    height: 4rem;
    border: 0.1rem solid ${theme.color.object.alternative};
    border-radius: 50%;
`
export const nicknameStyle = css`
    ${theme.font.bodyBold1};
    color: ${theme.color.object.assistive};
`
export const dividerStyle = css`
    height: 0.1rem;
    background-color: ${theme.color.object.alternative};
`
export const infoContainerStyle = css`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
`
export const infoElementContainerStyle = css`
    display: flex;
    gap: 4rem;
`
export const infoTitleStyle = css`
    ${theme.font.body1}
    color: ${theme.color.interactive.inactive};
`
export const infoContentStyle = css`
    ${theme.font.body1}
    color: ${theme.color.base.darkgray};
`
export const contentStyle = css`
    ${theme.font.body2}
    color: ${theme.color.base.black};
`