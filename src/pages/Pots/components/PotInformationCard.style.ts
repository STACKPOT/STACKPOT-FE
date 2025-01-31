import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
    height: 32rem;
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;
    border-radius: 24px;
    border: 1px solid ${theme.color.object.alternative};
    box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
    cursor: pointer;
`
export const titleContainer = css`
    display: flex;
    justify-content: space-between;
`
export const titleStyle = css`
    ${theme.font.title1};
    color: ${theme.color.base.darkgray};
`
export const profileContainer = css`
    display: flex;
    align-items: center;
`
export const profileStyle = css`
    width: 4rem;
    height: 4rem;
    border: 1px solid ${theme.color.object.alternative};
    border-radius: 50%;
`
export const nicknameStyle = css`
    ${theme.font.caption2};
    color: ${theme.color.object.assistive};
    margin-left: 1.2rem;
`
export const ddayBadgeWrapper = css`
    margin-left: 3rem;
`