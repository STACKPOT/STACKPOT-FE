import { css } from "@emotion/react";
import theme from "@styles/theme";

export const titleContainer = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  gap: 1rem; 
`;

export const leftContainer = css`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex-grow: 1; 
  max-width: calc(100% - 12rem);
`;

export const rightContainer = css`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0; 
  position: relative;
`;

export const titleStyle = css`
  ${theme.font.bodyBold3};
  color: ${theme.color.base.darkgray};
  white-space: normal;
  word-break: break-word; 
  max-width: 100%; 
`;

export const iconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
  color: ${theme.color.point.hero};
`

export const prevButtonStyle = css`
  all: unset; 
  cursor: pointer;
`

export const profileContainer = css`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1.9rem;
`;

export const profileImgStyle = css`
  width: 4rem;
  height: 4rem;
`;

export const nicknameStyle = css`
  ${theme.font.caption2};
  color: ${theme.color.object.assistive};
`;

export const dateContainer = css`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const dateStyle = css`
  ${theme.font.caption3};
  color: ${theme.color.object.assistive};
`;

export const dividerStyle = css`
  width: 100%;
  height: 1px;
  background: ${theme.color.object.alternative};
`;

export const contentContainerStyle = css`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
  padding: 0;
  text-align: left;
`;

export const contentStyle = css`
  ${theme.font.title1};
  color: ${theme.color.base.darkgray};
`;

export const bottomContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4.8rem;
`

export const contributorContainer = css`
  display: flex;
  align-self: flex-start;
  flex-wrap: wrap;
  gap: 3.2rem;
`

export const contributorCard = css`
  display: flex;
  padding: 2rem 3rem;
  align-items: flex-start;
  border: 1px solid ${theme.color.object.alternative};
  background: ${theme.color.base.white};
  border-radius: 16px;
`

export const contributorInner = css`
  gap: 2rem;
  align-items: center; 
  justify-content: flex-start; 
  display: flex;
`

export const contributorNicknameStyle = css`
  ${theme.font.caption1};
  color: ${theme.color.object.assistive};
`

export const dropdownWrapperStyle = css`
  position: relative;
  right: 0;
  top: 100%;
`;
