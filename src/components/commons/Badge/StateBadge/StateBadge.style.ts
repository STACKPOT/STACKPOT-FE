import { css } from "@emotion/react";
import theme from "@styles/theme";

export const badgeStyle = (color:string) =>css`
display: inline-flex;
height: 4rem;
padding: 1.2rem 2.4rem;
border-radius: 3.2rem;
border: 0.1rem solid rgba(112, 115, 124, 0.20);
background-color: ${color};
color: white;
${theme.font.captionBold1}
white-space: nowrap;
`