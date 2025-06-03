import { css } from '@emotion/react';
import theme from '@styles/theme';

export const container = css`
	display: flex;
	flex-direction: column;
	padding: 4.8rem 0;
	gap: 4.8rem;
`;
export const dividerStyle = css`
	height: 1px;
	background-color: ${theme.color.object.alternative};
`;
export const bodyContainer = css`
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
`;
export const tabsContainer = css`
	display: flex;
	gap: 6.4rem;
	justify-content: center;
`;
export const tabsTextStyle = (selected: boolean) => css`
	${theme.font.bodyBold2};
	color: ${selected ? theme.color.point.hero : theme.color.interactive.inactive};
	cursor: pointer;
`;
export const listContainer = (type: 'feed' | 'pot') => css`
	display: flex;
	flex-direction: column;
	gap: ${type === 'feed' ? '3.2rem' : '4.8rem'};
`;


