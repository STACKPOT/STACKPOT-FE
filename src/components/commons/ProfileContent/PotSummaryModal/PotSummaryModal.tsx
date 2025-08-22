import { CloseIcon } from '@assets/svgs';
import { backgroundStyle, modalStyle, headerStyle, titleStyle, closeBtnStyle, badgeListStyle, badgeItemStyle, contentStyle, footerStyle } from './PotSummaryModal.style';
import { useEffect, useRef } from 'react';
import { Badge, Button } from '@components/index';
import useGetProfilePotAppealContent from 'apis/hooks/users/useGetProfilePotAppealContent';


interface PotSummaryModalProps {
	potId: number;
	onCancel: () => void;
	userId?: number
}

const PotSummaryModal: React.FC<PotSummaryModalProps> = ({ potId, onCancel, userId }: PotSummaryModalProps) => {
	const { data } = useGetProfilePotAppealContent(potId, userId);
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		modalRef.current?.focus();
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onCancel();
		};
		window.addEventListener('keydown', onKeyDown);

		return () => {
			document.body.style.overflow = 'auto';
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [onCancel]);

	if (!data) {
		return <div>데이터가 없습니다.</div>;
	}

	const { appealContent, userPotRole, myBadges } = data;

	return (
		<div
			css={backgroundStyle}
			onClick={(e) => { if (e.target === e.currentTarget) onCancel(); }}
		>
			<div
				css={modalStyle}
				ref={modalRef}
				role="dialog"
				aria-modal="true"
				aria-labelledby="pot-summary-title"
				onClick={(e) => e.stopPropagation()}
			>
				<button css={closeBtnStyle} aria-label="닫기" onClick={onCancel}>
					<CloseIcon />
				</button>

				<div css={headerStyle}>
					<div id="pot-summary-title" css={titleStyle}>여기서 저는요 👋</div>
				</div>

				<ul css={badgeListStyle} aria-label="활동 역할 및 획득 뱃지">
					<li css={badgeItemStyle}>
						<Badge content={userPotRole} />
					</li>
					{myBadges?.map((b) => (
						<li key={b.badgeId} css={badgeItemStyle}>
							<Badge content={b.badgeName} />
						</li>
					))}
				</ul>

				<div id="pot-summary-content" css={contentStyle}>
					<p>{appealContent}</p>
				</div>

				<div css={footerStyle}>
					<Button variant="full" type="button" onClick={() => { }}>
						편집하기
					</Button>
					<Button variant="full" type="button" actionType="neg" onClick={() => { }}>
						삭제하기
					</Button>
				</div>
			</div>
		</div >
	);
};

export default PotSummaryModal;
