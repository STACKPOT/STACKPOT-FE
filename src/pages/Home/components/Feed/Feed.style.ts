import { css } from "@emotion/react";
import { spin } from "@styles/animation";
import theme from "@styles/theme";

export const feedWriteButton = css`
  padding: 1.1rem 1.6rem;
  background-color: ${theme.color.point.hero};
  color: ${theme.color.base.white};
  border-radius: 20px;
  font-weight: 500;
  font-size: 1.4rem;
  border: none;
  cursor: pointer;
`;

export const contentHeader = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const buttonContainer = css`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  align-items: center;
  justify-content: left;
`;

export const contentBody = css`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const iconStyle = css`
  animation: ${spin} 1s linear infinite;
  width: 3rem;
  height: 3rem;
`;

export const cardStyle = css`
  height: 27.3rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 24px;
`;

export const iconContainer = css`
  justify-content: center;
  display: flex;
`;

export const emptyFeedFallbackStyle = css`
  text-align: center;
  height: 96rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  align-self: stretch;

  div {
    font-size: 2rem;
    align-items: center;
  }

  p {
    ${theme.font.title1};
    margin-top: 0.8rem;
    color: ${theme.color.object.hero};
  }
`;

export const emptyFeedContainerStyle = css`
  padding: 41.2rem 0;
  margin: 0;
`;
