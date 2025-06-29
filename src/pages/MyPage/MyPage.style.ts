import { css } from '@emotion/react';
import theme from '@styles/theme';

export const container = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 4.8rem 0;
	gap: 4.8rem;
	width: 100%;
	max-width: 110rem;
	box-sizing: border-box;
`;

export const dividerStyle = css`
	width: 100%;
	height: 1px;
	background-color: ${theme.color.object.alternative};
	margin-top: 2rem;
`;

export const bodyContainer = css`
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
	width: 100%;
	margin: 0 auto;
`;
export const tabsContainer = css`
	display: flex;
	gap: 6.4rem;
	justify-content: center;
`;
export const tabsTextStyle = (selected: boolean) => css`
	${theme.font.title2};
	color: ${selected ? theme.color.point.hero : theme.color.object.hero};
	cursor: pointer;
`;
export const listContainer = (type: 'feed' | 'pot' | 'introduction') => css`
	display: flex;
	flex-direction: column;
	gap: ${type === 'feed' ? '3.2rem' : '4.8rem'};
`;
