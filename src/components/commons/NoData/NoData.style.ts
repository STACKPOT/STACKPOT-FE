import { css } from "@emotion/react";
import theme from "@styles/theme";

export const noDataContainer = css`
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
  padding: 16.9rem 0;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

export const noDataTextStyle = css`
  ${theme.font.title1};
  color: ${theme.color.object.hero};
  text-align: center;
  white-space: pre-wrap;
`;
