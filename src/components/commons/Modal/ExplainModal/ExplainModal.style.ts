import { css, SerializedStyles } from "@emotion/react";
import { media } from "@styles/media";
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
  z-index: 1000;
`;

export const containerStyle = (customStyle?: SerializedStyles) => css`
  width: 40rem;
  ${media[1440]} {
    width: ${!customStyle && `56rem`};
  }
  ${media[1920]} {
    width: ${!customStyle && `76rem`};
  }
  padding: 2.4rem;
  border-radius: 12px;
  border: 1px solid ${theme.color.object.assistive};
  background-color: ${theme.color.base.white};
  display: flex;
  flex-direction: column;
  ${customStyle};
`;

export const profileContainerStyle = css`
  width: 76rem;
`;

export const closeButtonStyle = css`
  height: 2.4rem;
  margin-left: auto;
  cursor: pointer;
`;

export const titleContentContainerStyle = (
  type: "normal" | "profile" | "custom"
) => css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 0.8rem 1.6rem;
  align-items: ${type === "profile" && "center"};
  text-align: ${type === "profile" && "center"};
`;

export const titleStyle = css`
  ${theme.font.title2}
  color: ${theme.color.point.gray};
  white-space: pre-wrap;
`;

export const contentContainer = (customStyle: boolean) => css`
  max-height: ${customStyle ? `none` : `calc(var(--vh, 60vh) - 227px)`};
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const buttonStyle = css`
  margin: 1.6rem;
`;

export const profileContentStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
`;

export const profileStyle = css`
  width: 6.4rem;
  height: 6.4rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 50%;
`;

export const profileNicknameStyle = css`
  ${theme.font.title1};
  color: ${theme.color.point.hero};
`;
