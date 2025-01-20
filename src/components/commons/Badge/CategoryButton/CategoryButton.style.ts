import { css } from "@emotion/react"
import theme from "@styles/theme"

export const buttonStyle = css`
    display: inline-flex;
    align-items: center;
    padding: 0.8rem 1.2rem;
    ${theme.font.captionBold1}
    box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
    cursor: pointer;
`
export const unselectedButtonStyle = css`
    ${buttonStyle}
    background-color: ${theme.color.base.white};
    color: ${theme.color.point.hero};
    border-radius: 0.8rem;
    border: 0.1rem solid ${theme.color.point.alternative};
    
`
export const selectedButtonStyle = css`
    ${buttonStyle}
    background-color: ${theme.color.point.hero};
    color: ${theme.color.base.white};
    border-radius: 0.8rem;
    border: 0.1rem solid ${theme.color.point.hero};
`