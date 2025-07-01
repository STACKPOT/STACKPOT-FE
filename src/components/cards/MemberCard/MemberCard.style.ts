import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = (type: "selection" | "info" | "none") => css`
  width: 33.5rem;
  padding: 2.5rem 1.9rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  background-color: ${theme.color.base.white};
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 16px;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  transition: all 0.1s ease-out;
  &:hover {
    ${type === "info" && selectedContainerStyle};
  }
  &:hover p {
    ${type === "info" && selectedNicknameStyle};
  }
`;

export const selectedContainerStyle = css`
  background-color: ${theme.color.point.hero};
  border-color: ${theme.color.point.hero};
`;

export const checkIconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
  transition: all 0.1s ease-out;
`;

export const profileStyle = css`
  width: 4rem;
  height: 4rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 50%;
  background-color: white;
`;

export const nicknameStyle = css`
  ${theme.font.caption2};
  color: ${theme.color.point.gray};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  flex: 1;
`;

export const selectedNicknameStyle = css`
  ${theme.font.caption2};
  color: ${theme.color.base.white};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  flex: 1;
`;
