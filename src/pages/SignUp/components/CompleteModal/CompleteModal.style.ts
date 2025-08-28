import { css } from "@emotion/react";
import theme from "@styles/theme";

export const imageStyle = css`
  width: 6.4rem;
  height: 6.4rem;
  margin-bottom: 0.8rem;
`;

export const modalStyle = css`
  width: 76rem;
`;

export const bodyContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const nicknameStyle = css`
  color: ${theme.color.point.hero};
  ${theme.font.title1}
`;
