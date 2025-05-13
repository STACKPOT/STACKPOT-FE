import { css } from '@emotion/react';
import theme from '@styles/theme';

export const cardStyle = css`
	width: 90.8rem;
	padding: 2.4rem 3rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	background-color: white;
	border-bottom: 1px solid ${theme.color.object.alternative};
	cursor: pointer;
`;
export const headerContainer = css`
	display: flex;
	justify-content: space-between;
`;
export const profileContainer = css`
	display: flex;
	align-items: center;
	gap: 1.6rem;
`;
export const profileImageStyle = css`
	width: 5rem;
	height: 5rem;
	border: 1px solid ${theme.color.object.alternative};
	border-radius: 50%;
`;
export const nicknameDateContainer = css`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
`;
export const nicknameStyle = css`
	${theme.font.bodyBold1}
	color:${theme.color.object.assistive};
	&:hover {
		text-decoration: underline;
	}
`;

export const moreIconStyle = css`
	width: 2.4rem;
	height: 2.4rem;
	margin-bottom: auto;
	margin-left: auto;
`;

export const dateStyle = css`
	color: ${theme.color.interactive.inactive};
	${theme.font.caption2}
`;

export const titleStyle = css`
	color: ${theme.color.base.darkgray};
	${theme.font.title1}
`;
export const contentStyle = css`
	height: 6rem;
	${theme.font.caption3}
	color: ${theme.color.object.assistive};
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;
export const likeContainer = css`
	display: flex;
	margin-left: auto;
	padding: 0.2rem 0;
	align-items: center;
	gap: 0.8rem;
`;
export const textStyle = css`
	${theme.font.label3}
	color: ${theme.color.object.hero};
`;
export const likeIconStyle = (isLike: boolean, isAuth: boolean) => css`
	width: 2.2rem;
	height: 2.2rem;
	fill: ${isLike ? theme.color.feedback.negative : theme.color.interactive.inactive};
	cursor: ${isAuth && 'pointer'};
`;
export const saveIconStyle = (isSave: boolean, isAuth: boolean) => css`
	width: 2.2rem;
	height: 2.2rem;
	fill: ${isSave ? '#774F00' : theme.color.interactive.inactive};
	cursor: ${isAuth && 'pointer'};
`;
export const commentIconStyle = (isComment: boolean, isAuth: boolean) => css`
	width: 2.2rem;
	height: 2.2rem;
	fill: ${isComment ? theme.color.object.hero : theme.color.interactive.inactive};
	cursor: ${isAuth && 'pointer'};
`;
