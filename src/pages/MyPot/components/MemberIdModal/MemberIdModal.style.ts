import { css } from "@emotion/react";
import theme from "@styles/theme";

export const mainContainer = css`
  display: flex;
  width: 73.5rem;
  padding: 3.2rem 3.2rem 6rem;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 10.3rem;
  border-radius: 24px;
  border: 1px solid ${theme.color.object.alternative};
  background: ${theme.color.base.white};
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04);
`

export const cancelContainer = css`
  display: flex;
  justify-content: flex-end;
  align-self: center;
  width: 100%;
`;

export const cancelIconStyle = css`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
`

export const subContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`

export const textContainer = css`
  display: flex;
  gap: 1.6rem;
`

export const innerContainer = css`
  display: flex;
  gap: 3.2rem;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

export const titleTextStyle = css`
  ${theme.font.title1};
`

export const contentTextStyle = css`
  ${theme.font.caption3};
  color: ${theme.color.object.assistive};
`

export const nickNameTextStyle = css`
  ${theme.font.caption1};
  color: ${theme.color.base.darkgray};
`

export const highlightStyle = css`
  color: ${theme.color.point.hero};
`

export const kakaoIdTextStyle = css`
  color: ${theme.color.point.hero};
  ${theme.font.caption1};
`

export const profileImageStyle = css`
  width: 4.4rem;
  height: 4.4rem;
`

export const nicknameIdContainer = css`
  dispaly: flex;
  flex-direction: column;
  align-items: flex-start;  
`
export const gridContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 22rem);
  gap: 3.2rem 0;
  justify-content: flex-start;
  width: fit-content;
`;

export const memberSetStyle = css`
  display: flex;
  gap: 1.4rem;
  align-items: center;
  justify-content: flex-start;
  width: 22rem;
`;
