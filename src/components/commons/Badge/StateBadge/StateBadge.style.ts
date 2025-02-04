import { css } from "@emotion/react";
import theme from "@styles/theme";

export const badgeStyle = (color:string) =>css`
display: flex;
padding: 1.2rem 2.4rem;
border-radius: 8px;
border: 1px solid ${theme.color.border.normal};
background-color: ${color};
color: ${theme.color.point.navy};
${theme.font.captionBold1}
`