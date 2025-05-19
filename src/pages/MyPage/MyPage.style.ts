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

export const feedWriteContainer = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 22px 37px;
	border: 1px solid ${theme.color.accent.blueBg};
	border-radius: 8px;
	background-color: #fff;
	cursor: pointer;
	margin-bottom: 32px;

	&:hover {
		background-color: ${theme.color.point.normal};

		& p {
			color: ${theme.color.object.hero};
		}
	}
`;

export const feedWriteText = css`
	display: flex;
	align-items: center;
	gap: 1rem;
	font-size: 1.6rem;
	color: ${theme.color.point.alternative};

	font-weight: 500;
`;

export const feedWriteButton = css`
	padding: 11px 16px;
	background-color: ${theme.color.point.hero};
	color: ${theme.color.base.white};
	border-radius: 20px;
	font-weight: 500;
	font-size: 1.4rem;
	border: none;
	cursor: pointer;
`;

export const feedWriteProfileStyle = css`
	width: 50px;
	border: 1px solid ${theme.color.object.alternative};
	border-radius: 50%;
	background-color: ${theme.color.point.ivory};
`;
