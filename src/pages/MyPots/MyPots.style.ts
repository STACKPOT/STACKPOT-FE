import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  padding: 4.8rem 0;
  display: flex;
  flex-direction: column;
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

export const contentBody = css`
  display: flex;
  flex-direction: column;
`;

export const onGoningPotContainer = css`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  margin-top: 3.6rem;
  flex-grow: 1;
`;

export const textContainer = css`
  ${theme.font.title3};
  color: ${theme.color.interactive.inactive};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;
