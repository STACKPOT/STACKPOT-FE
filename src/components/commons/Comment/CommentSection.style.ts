import { css } from "@emotion/react";
import theme from "@styles/theme";

export const commentContainer = css`
  display: flex;
  flex-direction: column;
`;
export const commentCountStyle = css`
  ${theme.font.caption3};
  margin-bottom: 1.6rem;
`;
export const textAreaStyle = css`
  height: 5.7rem;
`;
export const commentListContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
