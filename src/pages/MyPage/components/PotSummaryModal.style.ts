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
    width: 65.2rem;
    height: 66.5rem;
    display: flex;
    flex-direction: column;
    padding: 3.2rem;
    border-radius: 24px;
    border: 1px solid ${theme.color.object.alternative};
    background-color: white;
`
export const closeIconStyle = css`
    width: 1.2rem;
    height: 1.2rem;
    margin: 0.85rem 0;
    margin-left: auto;
    cursor: pointer;
`
export const bodyContainer = css`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`
export const titleContainer = css`
    display: flex;
    justify-content: center;
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
export const bodyTitleStyle = css`
    ${theme.font.bodyBold1};
    color: ${theme.color.point.hero};
`
export const contentStyle = css`
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
export const appealContentStyle = css`
    ${contentStyle};
    height: 21.8rem;
`