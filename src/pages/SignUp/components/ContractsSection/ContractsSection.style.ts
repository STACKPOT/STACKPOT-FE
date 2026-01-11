import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 5.2rem;
`;
export const contractContainer = css`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const contractStyle = css`
  ${theme.font.body3}
  color: ${theme.color.point.gray};
`;
export const detailButtonStyle = css`
  margin-left: auto;
  ${theme.font.caption2};
  color: ${theme.color.object.hero};
  text-decoration: solid underline;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${theme.color.feedback.positive};
  }
`;

export const modalContainerStyle = css`
  width: 76rem;
`;

export const modalContentStyle = css`
  max-height: none;
`;
