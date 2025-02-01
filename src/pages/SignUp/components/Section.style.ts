import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`
export const titleContainer = css`
    display: flex;
    gap: 0.9rem;
    align-items: center;
`
export const titleStyle =css`
    ${theme.font.bodyBold2}
    color: ${theme.color.base.darkgray};
`
export const potIconStyle= css`
    width: 2.4rem;
    height: 2.2rem;
    color: ${theme.color.point.hero};
`
export const bodyContainer = css`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`
export const descriptionStyle = css`
    ${theme.font.caption3}
    color: ${theme.color.object.assistive};
    white-space: pre-wrap;
`