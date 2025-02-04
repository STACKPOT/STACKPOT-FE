import { css } from "@emotion/react";
import theme from "@styles/theme";

export const backgroundStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  overflow: hidden;

`;
export const modalStyle = css`
    width: 78.3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3.2rem;
    border-radius: 2.4rem;
    border: 1px solid ${theme.color.object.alternative};
    background-color: white;
`
export const closeButtonContainer = css`
    height: 2.9rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export const closeIconStyle = css`
    width: 1.2rem;
    height: 1.2rem;
    cursor: pointer;
`
export const bodyContainer = css`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`
export const titleContainer = css`
    display: flex;
    justify-content: center;
`
export const appealIconStyle = css`
    width: 2.1rem;
    height: 2.2rem;
`
export const titleStyle = css`
    ${theme.font.title1};
    color: ${theme.color.point.hero};
`
export const dateContainer = css`
    display: flex;
    gap: 3.2rem;
    justify-content: center;
`
export const dateStyle = css`
    ${theme.font.body1};
    color: ${theme.color.object.assistive};
`
export const dividerStyle = css`
    height: 1px;
    background-color: ${theme.color.object.alternative};
`
export const bodyTitleContainer = css`
    display: flex;
    gap: 0.8rem;
`
export const bodyTitleIconStyle = css`
    width: 1.9rem;
    height: 1.9rem;
`
export const bodyTitleStyle = css`
    ${theme.font.bodyBold1};
    color: ${theme.color.point.hero};
`
export const introductionContentStyle = css`
    height: 15.6rem;
    width: 100%;
    overflow-y: auto;
    ${theme.font.caption3};
    color: ${theme.color.base.darkgray};
    white-space: pre-wrap;
    ::-webkit-scrollbar {
        display: none;
    }
`
export const textAreaStyle = css`
    height: 15.7rem;
    width: 100%;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
    border: 1px solid ${theme.color.object.alternative};
    ${theme.font.caption1};
    font-family: "Pretendard";
    color: ${theme.color.base.darkgray};
    ::placeholder{
        color: ${theme.color.interactive.inactive};
    }
    &:focus {
    border-color: ${theme.color.point.hero};
    outline: none;
    }
    resize: none;
`