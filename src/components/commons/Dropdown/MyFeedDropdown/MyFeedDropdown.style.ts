import { css } from "@emotion/react";
import theme from "@styles/theme";

export const dropdownStyle = css`
  width: 16rem;
  height: 9.7rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 1.6rem;
  flex-direction: column;
  position: fixed;
`;

export const topContainer = css`
  padding: 1rem;
  border-bottom: 1px solid ${theme.color.object.alternative};
  color: ${theme.color.point.gray};
  ${theme.font.caption3};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const underContainer = css`
  padding: 1rem;
  color: ${theme.color.feedback.negative};
  ${theme.font.caption3};
  display: flex;
  align-items: center;
  justify-content: center;
`;
