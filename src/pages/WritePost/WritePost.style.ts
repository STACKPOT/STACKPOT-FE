import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  margin-top: 5.55rem;
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
  width: 2.4rem;
  height: 2.4rem;
`;

export const titleText = css`
  width: 70.8rem;
  height: 5.2rem;
  padding: 1.2rem 1.6rem;
`;

export const textareaStyle = css`
  ${theme.font.caption3};
  font-family: "Pretendard";
  resize: none;
  width: 70.8rem;
  height: 34.9rem;
  border: 1px solid ${theme.color.border.alternative};
  border-radius: 0.8rem;
  box-sizing: border-box;
  overflow: auto;
  padding: 2.4rem;

  &::placeholder {
    color: ${theme.color.object.hero};
    ${theme.font.caption3};
  }

  &:focus {
    border-color: ${theme.color.point.hero};
    border-width: 2px;
  }
`;
