import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const titleContainer = css`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;
export const backButtonStyle = css`
  height: 4rem;
  width: 4rem;
  cursor: pointer;
`;

export const titleStyle = css`
  ${theme.font.display1}
  color: ${theme.color.point.gray};
  word-break: break-all;
  margin-right: 1.6rem;
`;

export const buttonWrapperStyle = css`
  margin-left: auto;
`;

export const profileContainer = css`
  display: flex;
  align-items: center;
  gap: 2rem;
`
export const profileStyle = css`
  width: 5rem;
  height: 5rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 50%;
  cursor: pointer;
`
export const nicknameStyle = css`
  ${theme.font.caption3};
  color: ${theme.color.base.black};
  cursor: pointer;
`