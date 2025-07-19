import { css } from "@emotion/react";
import theme from "@styles/theme";

export const cardStyle = css`
  width: 30rem;
  height: 21.3rem;
  padding: 2.8rem 1.6rem;
  border-radius: 24px;
  box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.color.object.alternative};
  cursor: pointer;
`;
export const cardHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`;
export const profileImageStyle = css`
  width: 4rem;
  height: 4rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 50%;
`;

export const profileContainer = css`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

export const nicknameStyle = css`
  width: 10.3rem;
  ${theme.font.bodyBold2}
  color: ${theme.color.point.gray};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
  }
`;

export const titleContainer = css`
  display: flex;
  gap: 0.8rem;
  margin-top: 1.2rem;
`;

export const titleStyle = css`
  ${theme.font.bodyBold2};
  color: ${theme.color.point.gray};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const contentContainer = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const contentStyle = css`
  ${theme.font.caption2}
  color: ${theme.color.object.hero};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 4.7rem;
`;

export const categoriesContainer = css`
  display: flex;
  gap: 1rem;
`;

export const buttonStyle = css`
  background-color: transparent;
`;

export const buttonContainer = css`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  ${theme.font.caption1};
  color: ${theme.color.object.hero};
  width: 4rem;
  height: 4rem;
  &:hover {
    background-color: ${theme.color.point.normal};
    cursor: pointer;
    border-radius: 8px;
  }
`;

export const potSaveCountStyle = css`
  padding: 0 0.5rem;
  width: 100%;
  text-align: center;
`;
