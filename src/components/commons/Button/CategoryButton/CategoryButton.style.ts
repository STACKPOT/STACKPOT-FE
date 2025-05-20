import { css } from '@emotion/react';
import theme from '@styles/theme';

export const buttonStyle = css`
	display: inline-flex;
	align-items: center;
	padding: 0.8rem 1.2rem;
	${theme.font.caption2}
	box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
	cursor: pointer;
	border-radius: 8px;
`;
export const potButtonStyle = (selected: boolean) => css`
	border: 0.1rem solid ${selected ? theme.color.point.hero : theme.color.point.alternative};
	background-color: ${selected ? theme.color.point.hero : theme.color.base.white};
	color: ${selected ? theme.color.base.white : theme.color.point.hero};
`;

export const feButtonStyle = (selected: boolean) => css`
	border: 0.1rem solid ${selected ? theme.color.border.normal : theme.color.feedback.positive_blue_transparent};
	background-color: ${selected ? theme.color.point.assistive : theme.color.base.white};
	color: ${selected ? theme.color.base.white : theme.color.point.assistive};
`;

export const beButtonStyle = (selected: boolean) => css`
	border: 0.1rem solid ${selected ? theme.color.border.normal : theme.color.feedback.caution_transparent};
	background-color: ${selected ? theme.color.feedback.caution : theme.color.base.white};
	color: ${selected ? theme.color.base.white : theme.color.feedback.caution};
`;

export const pmButtonStyle = (selected: boolean) => css`
	border: 0.1rem solid ${selected ? theme.color.border.normal : theme.color.feedback.negative_transparent};
	background-color: ${selected ? theme.color.feedback.negative : theme.color.base.white};
	color: ${selected ? theme.color.base.white : theme.color.feedback.negative};
`;
export const deButtonStyle = (selected: boolean) => css`
	border: 0.1rem solid ${selected ? theme.color.border.normal : theme.color.feedback.positive_transparent};
	background-color: ${selected ? theme.color.feedback.positive : theme.color.base.white};
	color: ${selected ? theme.color.base.white : theme.color.feedback.positive};
`;
