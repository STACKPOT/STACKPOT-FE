import { css } from "@emotion/react";
import theme from "@styles/theme";

export const deletedComment = css`
  height: 10rem;
  padding: 0 3.2rem;
  display: flex;
  align-items: center;
  background-color: ${theme.color.object.normal};
  border-radius: 8px;
`;
export const deletedCommentText = css`
  ${theme.font.body3};
  color: ${theme.color.point.gray};
`;
