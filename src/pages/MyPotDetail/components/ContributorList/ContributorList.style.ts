import { css } from "@emotion/react";
import theme from "@styles/theme";

export const contributorButtonOuterContainer = css`
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
  width: 100%;
  flex-wrap: wrap;
`;

export const contributorButtonStyle = (isSelected: boolean) => css`
  display: flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${theme.color.point.alternative};
  background: ${isSelected ? theme.color.point.alternative : theme.color.base.white};
  box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  color: ${isSelected ? theme.color.base.white : theme.color.point.alternative};

  &:hover {
    background: ${theme.color.point.alternative};
    color: ${theme.color.base.white};
  }
`;

export const contributorButtonInnerContainer = css`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
`;

export const nicknameStyle = css`
  ${theme.font.captionBold1};
`;

export const profileImageStyle = css`
  width: 1.6rem;
  height: 1.6rem;
`