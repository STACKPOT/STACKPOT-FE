import { css } from "@emotion/react";
import theme from "@styles/theme";

export const titleContainer = css`
    display: flex;
    gap: 1.6rem;
    align-items: center;
    padding: 1.6rem 0;
`
export const titleStyle = css`
    ${theme.font.bodyBold2};
    color: ${theme.color.base.darkgray};
`
export const potIconStyle = css`
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.color.point.hero};
`
export const potsContainer = css`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`
export const modalBackground = css`
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