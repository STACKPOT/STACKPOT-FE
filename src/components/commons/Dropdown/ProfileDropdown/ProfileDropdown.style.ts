import { css } from "@emotion/react";
import theme from "@styles/theme";

export const dropdownStyle = css`
  position: absolute;
  top: calc(100% + 14px);
  right: 0;
  border-radius: 8px;
  width: 12.5rem;
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.base.white};
  padding: 0.8rem 0;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.16);
`;

export const itemStyle = (edit: boolean) => css`
  ${theme.font.body2};
  color: ${theme.color.base.black};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.8rem 0;
  position: relative;

  &:hover {
    color: ${edit ? theme.color.point.hero : theme.color.feedback.negative};
    background-color: ${edit
      ? theme.color.point.normal
      : theme.color.accent.pinkBg};
  }
`;
