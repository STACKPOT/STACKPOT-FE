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
	font-weight: 500;
	font-size: 1.4rem;
	border: none;
	cursor: pointer;
  margin-top: 4.8rem;
`;

export const introductionContentStyle = css`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  max-width: 888px;
  margin: 4rem auto 0;
  padding: 0 2rem;
`;

export const introductionTitleStyle = css`
  ${theme.font.display1}
`;

export const introductionBodyStyle = css`
  ${theme.font.body3}
`;

export const introductionEditButton = css`
  display: flex;
  padding: 1.4rem 1.9rem;
  border-radius: 8px;
  background-color: ${theme.color.point.hero};
	color: ${theme.color.base.white};

`