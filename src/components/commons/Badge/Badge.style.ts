import { css } from "@emotion/react";
import theme from "@styles/theme";

export const badgeStyle = (
  variant: "red" | "green" | "blue" | "purple" | "pink"
) => {
  const colors = {
    red: theme.color.accent.redBg,
    green: theme.color.accent.greenBg,
    blue: theme.color.accent.blueBg,
    purple: theme.color.accent.purpleBg,
    pink: theme.color.accent.pinkBg,
  };

  const texts = {
    red: theme.color.accent.redFg,
    green: theme.color.accent.greenFg,
    blue: theme.color.point.assistive,
    purple: theme.color.accent.purpleFg,
    pink: theme.color.accent.pinkFg,
  };

  return css`
    display: inline-flex;
    padding: 0.5rem 1.1rem;
    border-radius: 4px;
    background-color: ${colors[variant]};
    color: ${texts[variant]};
    ${theme.font.caption1}
    white-space: nowrap;
  `;
};
