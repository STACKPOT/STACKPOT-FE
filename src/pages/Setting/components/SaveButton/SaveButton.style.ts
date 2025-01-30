import { css } from "@emotion/react";
import theme from "@styles/theme";

export const buttonStyle = css`
  width: 54.9rem;
  height: 6rem;
  padding: 1.6rem 20.4rem;
  border-radius: 0.8rem;
  background-color: ${theme.color.point.hero};
  border: none;
  cursor: pointer;
`;

export const textStyle = css`
  color: ${theme.color.object.normal};
  ${theme.font.title1};
  justify-content: center;
  font-family: "Pretendard";
`;
