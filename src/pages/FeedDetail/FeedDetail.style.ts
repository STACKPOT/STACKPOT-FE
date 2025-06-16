import { css } from "@emotion/react";
import theme from "@styles/theme";

export const mainContainer = css`
  display: flex;
  flex-direction: column;
  padding: 8.4rem 0;
  gap: 4.8rem;
`;

export const sectionContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const titleContainer = css`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

export const iconStyle = css`
  height: 4rem;
  width: 4rem;
`;

export const titleStyle = css`
  ${theme.font.display1};
  color: ${theme.color.point.gray};
`;

export const editButtonStyle = css`
  margin-left: auto;
`;

export const profileContainer = css`
  display: flex;
  gap: 1.6rem;
`;

export const informationContainer = css`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  justify-content: center;
`;

export const nicknameStyle = css`
  ${theme.font.caption3};
  color: ${theme.color.base.black};
  cursor: pointer;
`;

export const dateStyle = css`
  ${theme.font.caption2};
  color: ${theme.color.object.hero};
`;

export const dividerStyle = css`
  background-color: ${theme.color.object.alternative};
  height: 1px;
`;

export const contentStyle = css`
  ${theme.font.body3};
  color: ${theme.color.point.gray};
`;

export const postButtonsContainer = css`
  display: flex;
  gap: 1.6rem;
`;

export const profileStyle = css`
  width: 5rem;
  height: 5rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 50%;
`;
