import { css } from "@emotion/react";
import theme from "@styles/theme";

export const summaryContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
  padding: 2.4rem 2.3rem;
  border-radius: 8px;
  border: 1px solid ${theme.color.point.alternative};
  background-color: ${theme.color.point.normal};
`;

export const summaryLabelStyle = css`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  color: ${theme.color.point.assistive};
  ${theme.font.caption3};
`;

export const summaryContentStyle = css`
  ${theme.font.body3};
  color: ${theme.color.point.gray};
`;

export const languageLabelContainer = css`
  display: flex;
`;
export const languageListContainer = css`
  display: flex;
  gap: 0.4rem;
  margin-left: 1.6rem;
`;
