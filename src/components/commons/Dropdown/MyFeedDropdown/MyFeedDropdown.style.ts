import { css } from "@emotion/react";
import theme from "@styles/theme";

export const dropdownStyle = css`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  background-color: white;
  border-radius: 8px;
  width: 12.5rem;
  padding: 0.8rem 0;
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.base.white};
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.16);
`;

export const iconStyle = css`
  cursor: pointer;
  height: 2.4rem;
  width: 2.4rem;
`;

export const containerStyle = (edit: boolean) => css`
  color: ${theme.color.base.black};
  ${theme.font.body2};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.8rem 1.4rem;
  position: relative;

  &:hover {
    color: ${edit ? theme.color.point.hero : theme.color.status.negative};
    background-color: ${edit
      ? theme.color.point.normal
      : theme.color.accent.pinkBg};
  }
`;

export const bodyStyle = css`
  position: relative;
  height: 2.8rem;
`;
