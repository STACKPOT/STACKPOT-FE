import { css } from "@emotion/react";
import theme from "@styles/theme";

export const modalBackgroundStyle = css`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;
export const containerStyle = css`
  width: 54rem;
  padding: 3.2rem 3.2rem 5rem 3.2rem;
  border-radius: 24px;
  border: 1px solid ${theme.color.object.alternative};
  background-color: ${theme.color.base.white};
  display: flex;
  flex-direction: column;
`;
export const closeButtonStyle = css`
  margin-left: auto;
  cursor: pointer;
`;

export const titleStyle = css`
  ${theme.font.title1}
  color: ${theme.color.base.darkgray};
  white-space: pre-wrap;
  text-align: center;
  margin-top: 1.6rem;
`;

export const profileContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  margin-top: 2.4rem;
`

export const profileStyle = css`
  width: 6.4rem;
  height: 6.4rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 50%;
`
export const nicknameStyle = css`
  ${theme.font.bodyBold1};
  color: ${theme.color.object.assistive};
`