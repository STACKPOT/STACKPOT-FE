import { css } from "@emotion/react";
import theme from "@styles/theme";

export const mainContainer = css`
  padding: 4.8rem 0;
`;

export const headerContainer = css`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const titleContainer = css`
  display: flex;
  gap: 1rem;
`;

export const iconStyle = css`
  margin: 0.8rem;
`;

export const titleStyle = css`
  ${theme.font.bodyBold3};
  color: ${theme.color.base.darkgray};
`;

export const profileContainer = css`
  display: flex;
  gap: 1.6rem;
`;

export const informationContainer = css`
  ${theme.font.bodyBold3};
  color: ${theme.color.base.darkgray};
`;

export const nicknameStyle = css`
  ${theme.font.body1};
  color: ${theme.color.object.assistive};
`;

export const dateStyle = css`
  ${theme.font.caption2};
  color: ${theme.color.interactive.inactive};
`;

export const dividerStyle = css`
  background-color: ${theme.color.object.alternative};
  height: 1px;
`;

export const contentStyle = css`
  ${theme.font.body2};
  color: ${theme.color.base.darkgray};
  margin-top: 3.2rem;
`;

export const profileStyle = css`
  width: 5rem;
  height: 5rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 50%;
`;
