import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  padding: 8.4rem 0;
  display: flex;
  flex-direction: column;
`;

export const contentTitle = css`
  ${theme.font.display1};
  color: ${theme.color.point.gray};
  display: flex;
  justify-content: row;
  align-items: center;
  gap: 0.8rem;
`;

export const iconStyle = css`
  color: ${theme.color.point.hero};
`;

export const description = css`
  margin-top: 0.8rem;
  color: ${theme.color.object.hero};
  ${theme.font.body3};
`;

export const potListContainer = css`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin-top: 3.2rem;
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

export const noDataContainerStyle = css`
  padding: 16.9rem 0;
  margin: 0;
`;
