import { css } from '@emotion/react';
import theme from '@styles/theme';

export const cardStyle = css`
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
	background-color: ${theme.color.base.white};
`;
export const nicknameDateContainer = css`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
`;
export const nicknameStyle = css`
	${theme.font.bodyBold1}
	color:${theme.color.base.black};
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
	color: ${theme.color.object.hero};
	${theme.font.caption2}
`;

export const titleStyle = css`
	color: ${theme.color.base.black};
	${theme.font.title1}
`;

export const contentStyle = css`
	height: 6rem;
	${theme.font.caption3}
	color: ${theme.color.object.hero};
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;

export const iconContainer = css`
	display: flex;
	margin-left: auto;
	padding: 0.2rem 0;
	align-items: center;
	gap: 2.2rem;
`;

export const IconStyle = (isAuth: boolean) => css`
	width: 2.2rem;
	height: 2.2rem;
	cursor: ${isAuth ? 'pointer' : 'default'};
`;

export const textStyle = css`
	${theme.font.label3}
	color: ${theme.color.object.hero};
	width: 1.5rem;
	text-align: right;
`;

export const iconGroup = css`
	display: flex;
	align-items: center;
	gap: 0.4rem;
`;
