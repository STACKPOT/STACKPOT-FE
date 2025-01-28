import { css } from "@emotion/react";
import theme from "@styles/theme";

export const taskBoxStyle = css`
  padding: 0.8rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
export const taskTitleContainer = css`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

export const taskTitleStyle = css`
  ${theme.font.bodyBold1}
  color: ${theme.color.base.darkgray}
`;

export const contentStyle = css`
  ${theme.font.caption1};
  color: ${theme.color.object.hero};
  height: 2.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const memberContainer = css`
  display: flex;
  justify-content: space-between;
`;

export const profileContainer = css`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

export const nickNameStyle = css`
  ${theme.font.caption1}
  color: ${theme.color.object.assistive}
`;

export const dividerStyle = css`
  height: 1px;
  width: 100%;
  background-color: ${theme.color.object.alternative};
  margin: 1.6rem 0;
`;
