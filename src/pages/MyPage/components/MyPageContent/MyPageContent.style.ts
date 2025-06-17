import { css } from "@emotion/react";
import theme from "@styles/theme";

export const emptyFeedFallbackStyle = css`
  ${theme.font.title1};
	text-align: center;
	height: 66rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-self: stretch;

	div {
		font-size: 2rem;
		align-items: center;
	}

	p {
    ${theme.font.body3};
		color: ${theme.color.object.hero};
	}
`;

export const introductionWriteButton = css`
	padding: 1.1rem 1.6rem;
	background-color: ${theme.color.point.hero};
	color: ${theme.color.base.white};
	border-radius: 32px;
	border: none;
	cursor: pointer;
  margin-top: 4.8rem;
`;

export const introductionContentStyle = css`
  display: flex;
  flex-direction: column;
  margin: 4rem auto 0;
`;

export const introductionWrapper = (isEditing: boolean) => css`
  display: flex;
  height: 90.4rem;
  padding: 5.4rem 2.4rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3.2rem;
  border: ${isEditing ? `1px solid ${theme.color.object.assistive}` : ''};
  border-radius: 8px;
`;

export const introductionTitleStyle = css`
  ${theme.font.display1}
  width: 110rem;
  white-space: pre-wrap;
  word-break: keep-all;
  border: none;
  outline: none;
  resize: none;
`;

export const introductionBodyStyle = css`
  ${theme.font.body3}
  width: 110rem;
  min-height: 50rem;
`;

export const introductionButton = css`
  display: flex;
  padding: 1.4rem 1.9rem;
  border-radius: 8px;
  background-color: ${theme.color.point.hero};
	color: ${theme.color.base.white};
`;

export const feedHeaderContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;
	
`;

export const feedCategoryButtonGroup = css`
  display: flex;
  gap: 0.8rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	align-self: stretch;
`;

export const feedCategoryAddButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.6rem;
  height: 3.6rem;
  box-sizing: border-box;
	padding: 0.6rem;
  border: 1px solid ${theme.color.point.hero};
  border-radius: 8px;
  background: white;
`;

export const feedCategoryButton = (active: boolean) => css`
	${theme.font.bodyBold2}
	height: 3.6rem;
  border: 1px solid ${theme.color.point.hero};
  background: ${active ? theme.color.point.hero : 'white'};
  color: ${active ? 'white' : theme.color.point.hero};
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
`;

export const feedSearchBox = css`
  display: flex;
	height : 5.6rem;
  align-items: center;
  border: 1px solid ${theme.color.object.assistive};
  border-radius: 24px;
  padding: 0.9rem 1.6rem;
  background-color: white;
  width: 100%;
  max-width: 37.6rem;

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 1.4rem;
    color: ${theme.color.object.hero};
    background: transparent;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.8rem;
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;