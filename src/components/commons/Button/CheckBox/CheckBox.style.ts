import { css } from "@emotion/react";
import theme from "@styles/theme";

export const checkBoxStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.1rem;
    height: 2.1rem;
    border: 0.1rem solid ${theme.color.interactive.inactive};
    border-radius: 0.6rem;
    background-color: transparent;
    cursor: pointer;
`