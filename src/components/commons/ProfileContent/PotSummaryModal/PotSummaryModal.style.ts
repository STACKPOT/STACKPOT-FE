import { css } from "@emotion/react";
import theme from "@styles/theme";

export const backgroundStyle = css`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1000;
`;

export const modalStyle = css`
    position: relative;
    width: 65.2rem;
    max-width: calc(100vw - 3.2rem);
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 2.4rem;
    border-radius: 24px;
    border: 1px solid ${theme.color.object.alternative};
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
`;

export const headerStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const titleStyle = css`
    ${theme.font.title2}
    color: ${theme.color.point.hero};
    margin: 0;
`;

export const closeBtnStyle = css`
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    border: none;
    background: transparent;
    cursor: pointer;
    line-height: 0;
`;

export const badgeListStyle = css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
`;

export const badgeItemStyle = css`
    display: inline-flex;
    align-items: center;
    padding: 0.4rem 0.8rem;
    border-radius: 999px;
    ${theme.font.body3}
`;

export const contentStyle = css`
    ${theme.font.body3}
    flex: 1 1 auto;
    overflow: auto;
    padding-right: 0.4rem; /* room for scrollbar */
    white-space: pre-wrap;
    padding-bottom: 0.8rem;
    overscroll-behavior: contain;
`;

export const emptyContentStyle = css`
    ${theme.font.title1}
    color: ${theme.color.object.hero};
    display: flex;
    height: 28.1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    align-self: stretch;
`;

export const footerStyle = css`
    display: grid;
    gap: 1.2rem;
    align-items: stretch;
    padding: 1.6rem;

    /* make children buttons fill their grid cell */
    & > * {
        width: 100%;
    }
`;

