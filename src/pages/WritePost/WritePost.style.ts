import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  padding: 4.4rem 0;
  overflow: hidden;
  gap: 3.2rem;
  display: flex;
  flex-direction: column;
`;

export const content = css`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const contentBody = css`
  padding: 3.2rem 10rem;
  box-shadow: 0px 4px 12px rgba(13, 10, 44, 0.06);
  border-radius: 3.2rem;
  border: 1px solid ${theme.color.border.alternative};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;
`;

export const contentTitle = css`
  ${theme.font.bodyBold2};
  color: ${theme.color.base.darkgray};
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const iconStyle = css`
  color: ${theme.color.point.hero};
`;

export const titleText = css`
  width: 70.8rem;
  height: 5.2rem;
  padding: 1.2rem 1.6rem;
  resize: none; /* 크기 조정 비활성화 */
  overflow-wrap: break-word; /* 줄바꿈 활성화 */
  white-space: pre-wrap; /* 공백 및 줄바꿈 유지 */
`;

export const bodyField = css`
  width: 70.8rem;
  height: 34.9rem;
  border: 1px solid ${theme.color.border.alternative};
  border-radius: 0.8rem;
  box-sizing: border-box;
  overflow: auto;

  &:focus-within {
    border-color: ${theme.color.point.hero};
    border-width: 2px;
  }
`;

export const bodyText = css`
  width: 66rem;
  border: none;
  box-sizing: border-box;
  padding: 1.2rem 1.6rem;

  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;

  &:focus {
    outline: none;
  }
`;
