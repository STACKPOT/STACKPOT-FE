import { BannerImage } from '@assets/images';
import { css } from '@emotion/react';
import theme from '@styles/theme';

export const container = css`
	padding: 4.8rem 0;
	// overflow: hidden;
	gap: 3.2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const bannerStyle = css`
	width: 100%;
	height: 36rem;
	background-image: url(${BannerImage});
	background-size: cover;
	background-position: center;
`;

export const bannerContainer = css`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const bannerTitleStyle = css`
	${theme.font.bodyBold2};
	color: white;
	padding-top: 3.9rem;
`;

export const spanStyle = css`
	color: ${theme.color.point.neon};
`;

export const buttonIconStyle = css`
	margin-left: 0.4rem;
`;

export const bannerSubtitleStyle = css`
	${theme.font.caption3};
	color: ${theme.color.object.alternative};
	padding-top: 0.4rem;
`;

export const buttonStyle = css`
	${theme.font.caption3};
	border-radius: 8px;
	padding: 0.7rem 1.7rem;
	display: flex;
	align-items: center;
	margin-top: 2.4rem;
`;

export const content = css`
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
`;
export const contentTitle = css`
	${theme.font.title3};
	color: ${theme.color.base.darkgray};
	display: flex;
	justify-content: row;
	align-items: center;
	gap: 0.8rem;
`;

export const iconStyle = css`
	width: 31px;
	height: 31px;
	flex-shrink: 0;
`;

export const subTitleStyle = css`
	color: ${theme.color.object.assistive};
	${theme.font.caption3};
`;
