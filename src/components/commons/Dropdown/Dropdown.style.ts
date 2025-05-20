import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const header = css`
	display: flex;
	padding: 8px 17px;
	width: 125px;

	justify-content: space-between;
	align-items: center;
	cursor: pointer;

	border: 1px solid ${theme.color.object.alternative};
	border-radius: 8px;
	background: ${theme.color.base.white};
`;

export const headerText = css`
	
	color: ${theme.color.base.black};
	${theme.font.body2};
`;

export const icon = css`
	margin-left: 0.4rem;
	font-size: 1.4rem;
`;

export const dropdown = css`
	position: absolute;
	top: 5.2rem;
	width: 100%;
	padding: 8px 0px;
	border-radius: 8px;
	background: ${theme.color.base.white};
	box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
	z-index: 10;
`;

export const option = css`
	padding: 1.2rem 0;
	text-align: left;
	cursor: pointer;
	color: ${theme.color.base.black};
	${theme.font.body2};
	position: relative;
	padding: 8px 14px;

	&:hover {
		color: ${theme.color.point.hero};
		background-color: ${theme.color.point.normal};
	}
`;
