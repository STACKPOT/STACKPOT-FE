import { css } from "@emotion/react";
import theme from "@styles/theme";

export const mainContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20rem;
  width: 100%;
`;

export const sloganContainer = css`
  ${theme.font.display3};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

export const LogoContainer = css`
  ${theme.font.display3};
  display: flex;
  gap: 1.6rem;
`;

export const titleStyle = css`
  color: ${theme.color.point.hero};
`;

export const logoStyle = css`
  width: 22.1rem;
  height: 3.7rem;
`;

export const bgStyle = css`
  width: 82rem;
  height: 82rem;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    #42ddff 0%,
    rgba(17, 112, 255, 0.46) 100%
  );
`;

export const bgContainer = css`
  filter: blur(85px);
  position: absolute;
  display: flex;
  z-index: -1;
`;

export const TaskImgageStyle = css`
  width: 108.5rem;
  margin-top: 1.6rem;
`;

export const subTitleStyle = css`
  ${theme.font.title1};
  color: ${theme.color.object.assistive};
  margin: 2rem 0 2.4rem 0;
`;

export const iconContainer = css`
  ${theme.font.label2};
  color: ${theme.color.object.assistive};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin-top: 3.2rem;
  padding-bottom: 20rem;
`;

export const bottomContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13rem 0;
`;

export const profileTextContainer = css`
  ${theme.font.display3};
  display: flex;
  gap: 3.2rem;
  align-items: center;
`;

export const profileContainer = css`
  display: flex;
  gap: 0.8rem;
`;

export const profileImageStyle = css`
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 50%;
`;

export const buttonStyle = css`
  margin: 3.2rem 0 4.8rem 0;
`;

export const myPotImageStyle = css`
  width: 81.4rem;
`;

export const imageContainer = css`
  display: flex;
  gap: 9rem;
  padding: 17rem 0;
`;

export const spanStyle = css`
  color: ${theme.color.point.hero};
`;

export const imageTitle = css`
  ${theme.font.display3}
  color: ${theme.color.base.darkgray};
`;

export const imageSubtitle = css`
  ${theme.font.body2};
  color: black;
`;

export const contentContainer = css`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  justify-content: center;
`;

export const horizontalImageContainer = css`
  display: flex;
  gap: 10rem;
  padding: 15rem 0;
`;

export const horizontalImageStyle = css`
  width: 58.3rem;
  height: 57.4rem;
  margin-bottom: 4.8rem;
`;

export const imageContentStyle = css`
  ${imageSubtitle}
  text-align: center;
`;

export const rightIconStyle = css`
  margin-left: 1.6rem;
`;
