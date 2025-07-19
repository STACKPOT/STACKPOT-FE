import { css } from "@emotion/react";
import theme from "@styles/theme";

export const mainContainer = css`
  display: flex;
  width: 54rem;
  padding: 3.2rem;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  border: 1px ${theme.color.border.alternative};
  background: ${theme.color.base.white};
`;

export const innerContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
`;

export const titleTextStyle = css`
  ${theme.font.title1};
`;

export const changeButtonStyle = css`
  display: flex;
  width: 42.9rem;
  justify-content: center;
  align-items: center;
  padding: 1.7rem 18rem;
  border-radius: 16px;
  border: 1px solid ${theme.color.border.normal};
  background: ${theme.color.point.hero};
`;

export const changebuttonTextStyle = css`
  color: ${theme.color.point.ivory};
  ${theme.font.captionBold1};
`;
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
`;
