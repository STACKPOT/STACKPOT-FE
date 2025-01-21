import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 6.4rem 0;
    background-color: ${theme.color.base.white};
`
export const mainContainer = css`
    width: 71.3rem;
    padding: 4.5rem 8.2rem;
    border: 1px solid ${theme.color.object.alternative};
    border-radius: 0.8rem;
`
export const mainContentContainer = css`
    display: flex;
    flex-direction: column;
    gap: 4.4rem;
`
export const headerContainer = css`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`
export const headerStyle =css`
    ${theme.font.bodyBold2}
    color: ${theme.color.base.darkgray};
`
export const dividerStyle = css`
    height: 0.1rem;
    background-color: ${theme.color.object.alternative};
`
export const bodyContainer = css`
    display: flex;
    flex-direction: column;
    gap: 5.6rem;
`
export const sectionContainer = css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`
export const sectionTitleContainer = css`
    display: flex;
    gap: 1.6rem;
    align-items: center;
`
export const potIconStyle= css`
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.color.point.hero};
`
export const sectionDescriptionStyle = css`
    ${theme.font.caption3}
    color: ${theme.color.object.assistive};
    white-space: pre-wrap;
`
export const sectionBodyContainer =css`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`
export const stackContainer =css`
    display: flex;
    align-items: center;
    gap: 3.6rem;
`
export const stackTitleStyle =css`
    ${theme.font.caption3}
    color: ${theme.color.base.black};
`
export const buttonContainer = css`
    display: flex;
    gap: 0.8rem;
`
export const interestContainer = css`
    display: flex;
    align-items: center;
    gap: 2rem;
`
export const nicknameSectionContainer = css`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`
export const makeNicknameContainer = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const nicknameInputContainer =css`
    width: 38rem;
`
export const nicknameButtonStyle =css`
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2.4rem;
    border-radius: 0.8rem;
    border: 1px solid ${theme.color.object.alternative};
    color: white;
    background-color: ${theme.color.point.navy};
    cursor: pointer;
`
export const contractSectionContainer = css`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`
export const contractContainer = css`
    display: flex;
    align-items: center;
    gap: 1rem;
`
export const contractStyle =css`
    ${theme.font.caption3}
    color: ${theme.color.object.assistive};
    width: 44rem;
`
export const contractDetailStyle =css`
    ${theme.font.caption3}
    color: ${theme.color.feedback.positive};
    text-decoration: solid underline;
    background-color: transparent;
    border: none;
    cursor: pointer;
`
export const nicknameContainer = css`
    display: flex;
    flex-direction: column;
`
export const nicknameInputStyle =css`
    width: 38rem;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
    ${theme.font.caption3};
    border: 1px solid ${theme.color.object.alternative};
    color: ${theme.color.point.hero};
    
    ::placeholder {
        color: ${theme.color.interactive.inactive};
    }

    &:focus {
        border: 1px solid ${theme.color.feedback.negative};
        outline: none;
        color: ${theme.color.interactive.inactive};
    }
`
export const nicknameInputDoneStyle =css`
    ${nicknameInputStyle};
    border-color: ${theme.color.point.hero};
`
export const nicknameMessageStyle =css`
    ${theme.font.caption2};
    color: ${theme.color.feedback.positive};
`
export const nicknameMessageWarningStyle =css`
    ${theme.font.caption2};
    color: ${theme.color.feedback.negative};
`
