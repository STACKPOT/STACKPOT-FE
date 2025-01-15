import { css } from "@emotion/react"
import theme from "@styles/theme"

export const unselectedButtonStyle = css`
    height: 4rem;
    display: inline-flex;
    align-items: center;
    padding: 1.2rem 2.4rem;
    background-color: white;
    color: ${theme.color.point.navy};
    border-radius: 3.2rem;
    border: 0.1rem solid rgba(112, 115, 124, 0.20);
    ${theme.font.captionBold1}
    font-weight: 600;
    cursor: pointer;
`
export const selectedButtonStyle = css`
    height: 4rem;
    display: inline-flex;
    align-items: center;
    padding: 1.2rem 2.4rem;
    background-color: white;
    color: ${theme.color.point.hero};
    border-radius: 3.2rem;
    border: 0.1rem solid ${theme.color.point.neon};
    ${theme.font.captionBold1}
    font-weight: 600;
    cursor: pointer;
`