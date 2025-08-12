import { css } from '@emotion/react';
import theme from '@styles/theme';

export const profileContainer = css`
	display: flex;
	gap: 4.8rem;
`;
export const profileStyle = css`
	width: 12.8rem;
	height: 12.8rem;
	border: 1px solid ${theme.color.object.alternative};
	border-radius: 50%;
`;
export const contentContainer = css`
	display: flex;
	flex-direction: column;
	width: 62.8rem;
	gap: 1.6rem;
`;
export const nicknameContainer = css`
	display: flex;
	justify-content: space-between;
`;
export const nicknameStyle = css`
	${theme.font.title2};
	align-items: center;
	color: ${theme.color.base.black};
`;
export const setUpIconStyle = css`
	width: 4.8rem;
	height: 4.4rem;
	padding: 1rem 1.2rem;
	color: ${theme.color.interactive.inactive};
	cursor: pointer;
`;
export const introductionStyle = css`
	${theme.font.body3};
	color: ${theme.color.object.hero};
	padding: 1.2rem 2.7rem;
	border: 1px solid ${theme.color.object.assistive};
	border-radius: 8px;
	margin-top: 0.4rem;
`;
