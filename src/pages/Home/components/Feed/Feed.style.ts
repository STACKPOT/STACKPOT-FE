import { css } from '@emotion/react';
import { spin } from '@styles/animation';
import theme from '@styles/theme';

export const feedWriteContainer = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 22px 37px;
	border: 1px solid ${theme.color.object.alternative};
	border-radius: 8px;
	background-color: #fff;
	cursor: pointer;
	margin-bottom: 32px;
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
	background-color: ${theme.color.object.hero};
	color: white;
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
	gap: 1.3rem;
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
export const profileStyle = css`
	width: 50px;
	border: 1px solid ${theme.color.object.alternative};
	border-radius: 50%;
`;
