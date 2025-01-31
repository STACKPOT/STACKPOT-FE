import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  padding: 3.2rem 0;
  overflow: hidden;
  gap: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const content = css`
  display: flex;
  flex-direction: column;
`;

export const contentTitle = css`
  ${theme.font.bodyBold2};
  color: ${theme.color.base.darkgray};
  display: flex;
  justify-content: row;
  align-items: center;
  gap: 1.6rem;
`;

export const iconStyle = css`
  color: ${theme.color.point.hero};
`;

export const description = css`
  margin-top: 0.8rem;
  color: ${theme.color.object.assistive};
  ${theme.font.caption3};
`;

export const contentBody = css``;
