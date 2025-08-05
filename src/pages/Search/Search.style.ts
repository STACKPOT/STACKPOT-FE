import { css } from "@emotion/react";
import theme from "@styles/theme";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const textContainerStyle = css`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.8rem;
`;

export const titleStyle = css`
  ${theme.font.title2};
  color: ${theme.color.point.gray};
`;

export const subtitleStyle = css`
  ${theme.font.body3};
  color: ${theme.color.object.hero};
  margin-bottom: 3.2rem;
`;

export const iconStyle = css`
  color: ${theme.color.point.hero};
  width: 2.4rem;
  height: 2.4rem;
`;
