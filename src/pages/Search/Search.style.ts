import { css } from "@emotion/react";
import theme from "@styles/theme";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
`;

export const textContainerStyle = css`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  justify-content: center;
`;

export const titleStyle = css`
  ${theme.font.bodyBold2};
  color: ${theme.color.base.darkgray};
`;

export const subtitleStyle = css`
  ${theme.font.caption3};
  color: ${theme.color.object.hero};
`;

export const iconStyle = css`
  color: ${theme.color.point.hero};
  width: 2.4rem;
  height: 2.4rem;
`;
