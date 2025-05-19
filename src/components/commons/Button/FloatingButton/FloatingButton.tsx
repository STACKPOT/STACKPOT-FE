import React from 'react';
import { useNavigate } from 'react-router-dom';
import { iconStyle, WriteButton } from './FloatingButton.style';
import { PencilIcon, PlusButtonIcon } from '@assets/svgs';
import routes from '@constants/routes';

interface FloatingButtonProps {
	type: 'feed' | 'pot';
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ type = 'feed' }: FloatingButtonProps) => {
	const navigate = useNavigate();
	const url = type === 'feed' ? routes.writePost : routes.createPot;

	return (
		<div css={WriteButton(type)} onClick={() => navigate(url)}>
			{type === 'feed' ? (
				<>
					<PencilIcon css={iconStyle} />
					피드 작성
				</>
			) : (
				<>
					<PlusButtonIcon />팟 만들기
				</>
			)}
		</div>
	);
};

export default FloatingButton;
