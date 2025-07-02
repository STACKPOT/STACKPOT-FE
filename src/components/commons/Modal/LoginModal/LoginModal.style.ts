import { css } from "@emotion/react";
import { media } from "@styles/media";
import theme from "@styles/theme";

export const background = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

export const container = css`
  width: 44.1rem;
  ${media[1440]} {
    width: 56rem;
  }
  ${media[1920]} {
    width: 76rem;
  }
  padding: 3.2rem 3.6rem;
  background: ${theme.color.base.white};
  border-radius: 8px;
  border: 1px solid ${theme.color.object.assistive};
  display: inline-flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const closeIconStyle = css`
  margin-left: auto;
  cursor: pointer;
`;

export const titleContentContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const titleStyle = css`
  color: ${theme.color.base.black};
  ${theme.font.title2};
  margin-bottom: 0.8rem;
`;

export const textStyle = css`
  ${theme.font.caption2};
  color: ${theme.color.object.hero};
`;

export const textHighlightStyle = css`
  ${theme.font.caption2};
  color: ${theme.color.status.positive};
  text-decoration: none;
  cursor: pointer;
`;

export const loginButtonContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  padding: 3.2rem;
`;

export const buttonStyle = css`
  display: flex;
  width: 36.9rem;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.04);
  ${theme.font.body3};
`;

export const googleButtonStyle = css`
  padding: 1.5rem 0;
  color: ${theme.color.base.black};
  background-color: ${theme.color.base.white};
`;

export const kakaoButtonStyle = css`
  padding: 1.6rem 0;
  color: ${theme.color.base.black};
  background-color: ${theme.color.social.kakaoBg};
`;

export const naverButtonStyle = css`
  padding: 1.4rem 0;
  color: ${theme.color.base.white};
  background-color: ${theme.color.social.naverBg};
`;
