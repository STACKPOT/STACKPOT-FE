import theme from "@styles/theme";
import { css } from "@emotion/react";

export const container = css`
  padding: 4.8rem 0;
  gap: 3.2rem;
  display: flex;
  flex-direction: column;
`;

export const content = (larger: boolean) => css`
  display: flex;
  flex-direction: column;
  gap: ${larger ? "3.2rem" : "0.8rem"};
`;
export const contentHeader = css`
  display: flex;
  gap: 1.6rem;
  ${theme.font.bodyBold2};
  color: ${theme.color.base.darkgray};
  display: flex;
  align-items: center;
`;

export const iconStyle = css`
  color: ${theme.color.point.hero};
`;

export const contentBody = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${theme.font.caption3};
  color: ${theme.color.object.assistive};
`;
export const profileStyle = css`
  ${theme.font.bodyBold1};
  color: ${theme.color.base.darkgray};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 41.1rem;
  gap: 3.9rem;
`;

export const imageStyle = css`
  margin-left: 40.8rem;
  height: 9.2rem;
  width: 9.2rem;
`;

export const contentFooter = css`
  ${theme.font.caption3};

  padding: 2.1rem 27.1rem;
  box-shadow: 0rem 4rem 12rem rgba(13, 10, 44, 0.06);
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  margin-bottom: 4rem;
`;

export const categoryContainer = css`
  ${theme.font.caption3};
  color: ${theme.color.base.black};
  display: flex;
  justify-content: row;
  gap: 0.8rem;
`;

export const textStyle = css`
  ${theme.font.caption3};
  color: ${theme.color.base.black};
  margin-right: 2.8rem;
`;

export const categories = css`
  display: flex;
  justify-content: row;
  gap: 0.8rem;
`;

export const textareaStyle = css`
  height: 18.5rem;
  padding: 2.4rem;
  border-radius: 1.2rem;
  ${theme.font.caption3};
  font-family: "Pretendard";

  &::placeholder {
    color: ${theme.color.object.hero};
    ${theme.font.caption3};
  }

  &:focus {
    border-color: ${theme.color.point.hero};
    outline: none;
  }
`;

export const buttonContainer = css`
  display: flex;
  justify-content: center;
  margin-top: 1.6rem;
`;
