import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = (isRecomment: boolean, isDeleted: boolean) => css`
  display: flex;
  flex-direction: column;
  padding: ${(isDeleted && "0 0") ||
  (isRecomment && "3.2rem 3.2rem") ||
  "3.2rem 0"};
  gap: 1.6rem;
  background-color: ${isRecomment ? theme.color.point.normal : "transparent"};
  border-radius: ${isRecomment && "8px"};
`;
export const profileContainer = css`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;
export const profileImageStyle = css`
  width: 5rem;
  height: 5rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 50%;
`;
export const profileTextContainer = css`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
export const nicknameContainer = css`
  display: flex;
  gap: 0.8rem;
`;
export const nicknameStyle = (isMine: boolean) => css`
  ${theme.font.caption3};
  color: ${isMine ? theme.color.point.hero : theme.color.base.black};
  cursor: pointer;
`;
export const dateStyle = css`
  ${theme.font.caption2};
  color: ${theme.color.object.hero};
`;
export const meatballIconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
  color: ${theme.color.point.gray};
  margin-left: auto;
  cursor: pointer;
`;
export const contentStyle = css`
  ${theme.font.body3};
  color: ${theme.color.base.black};
`;
export const openRecommentContainer = css`
  display: flex;
  gap: 0.4rem;
  align-self: flex-start;
  background-color: transparent;
`;
export const openRecommentIconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
  color: ${theme.color.point.hero};
`;
export const openRecommentTextStyle = css`
  ${theme.font.caption3};
  color: ${theme.color.point.hero};
`;
export const recommentContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: stretch;
`;
export const textAreaStyle = css`
  min-height: 11.6rem;
`;
