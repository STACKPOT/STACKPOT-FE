import { css } from "@emotion/react";
import theme from "@styles/theme";

export const cardStyle = css`
  padding: 2.6rem 2.4rem;
  border-radius: 24px;
  border: 0.1rem solid ${theme.color.object.alternative};
  background-color: ${theme.color.base.white};
  box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
  height: auto;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 8px 16px 0px rgba(13, 10, 44, 0.12);
  }
`;

export const taskCardInnerTopContainer = css`
  display: flex;
  justify-content: space-between;
`;

export const forDropdownStyle = css`
  position: relative;
  display: inline-block;
`;

export const badgeContainer = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

// export const contentContainer = css`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   gap: 1.2rem;
//   align-items: stretch;
// `;

export const titleTextStyle = css`
  ${theme.font.caption2}
  color: black;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const contentTextStyle = css`
  ${theme.font.body2}
  color: ${theme.color.object.hero};
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: calc(1.4rem * 2);
`;

export const dateTextStyle = css`
  ${theme.font.body2}
  color: ${theme.color.object.hero};
  align-self: flex-end;
`;

export const lineStyle = css`
  width: 100%;
  border: 0.1px solid ${theme.color.object.alternative};
`;

export const bottomContainer = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const profileContainer = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
export const profileImageStyle = css`
  width: 4rem;
  height: 4rem;
  border: 0.1rem solid ${theme.color.object.alternative};
  border-radius: 50%;
`;
export const nicknameStyle = css`
  ${theme.font.caption2}
  color: ${theme.color.object.hero};
`;
