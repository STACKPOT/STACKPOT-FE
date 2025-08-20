import { AppealIcon, BookIcon, CloseIcon, CreateIcon } from '@assets/svgs';
import { backgroundStyle, modalStyle, headerStyle, titleStyle, closeBtnStyle, badgeListStyle, badgeItemStyle, contentStyle, footerStyle } from './PotSummaryModal.style';
import { useEffect } from 'react';
import useGetFinishedModal from 'apis/hooks/users/useGetFinishedModal';
import { Badge, Button } from '@components/index';


interface PotSummaryModalProps {
	potId: number;
	onCancel: () => void;
}

const PotSummaryModal: React.FC<PotSummaryModalProps> = ({ potId, onCancel }: PotSummaryModalProps) => {
	const { data } = useGetFinishedModal(potId);

	useEffect(() => {
		// 모달 외부 스크롤 방지
		document.body.style.overflow = 'hidden';

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
	const tmp = '[STACKPOT] 팟의 노력파와 실력파가 이루어낸 환상적인 조합! 그들의 열정과 실력이 돋보이는 멋진 결과를 보여주었습니다. 이들의 서비스 컨셉은 언제 어디서나 한 곳에서 프로젝트를 진행과 동시에 회고, 피드에 글을 올리며 업무와 공부를 긍정적으로 돕는 것입니다. 프론트엔드 4명, 백앤드 3명, 기획자 1명, 디자이너 1명으로 구성된 이 팀은 업무를 성실하게 진행하며 미루지 않고 효율적으로 프로젝트를 진행했습니다. [STACKPOT] 팟의 노력파와 실력파가 이루어낸 환상적인 조합! 그들의 열정과 실력이 돋보이는 멋진 결과를 보여주었습니다. 이들의 서비스 컨셉은 언제 어디서나 한 곳에서 프로젝트를 진행과 동시에 회고, 피드에 글을 올리며 업무와 공부를 긍정적으로 돕는 것입니다.진행하며 미루지 않고 효율적으로 프로젝트를 진행했습니다. [STACKPOT] 팟의 노력파와 실력파가 이루어낸 환상적인 조합! 그들의 열정과 실력이 돋보이는 멋진 결과를 보여주었습니다. 이들의 서비스 컨셉은 언제 어디서나 한 곳에서 프로젝트를 진행과 동시에 회고, 피드에 글을 올리며 업무와 공부를 긍정적으로 돕는 것입니다. 프론트엔드 4명, 백앤드 3명, 기획자 1명, 디자이너 1명으로 구성된 이 팀은 업무를 성실하게 진행하며 미루지 않고 효율적으로 프로젝트를 진행했습니다. [STACKPOT] 팟의 노력파와 실력파가 이루어낸 환상적인 조합! 그들의 열정과 실력이 돋보이는 멋진 결과를 보여주었습니다. 이들의 서비스 컨셉은 언제 어디서나 한 곳에서 프로젝트를 진행과 동시에 회고, 피드에 글을 올리며 업무와 공부를 긍정적으로 돕는 것입니다.진행하며 미루지 않고 효율적으로 프로젝트를 진행했습니다. 다. 프론트엔드 4명, 백앤드 3명, 기획자 1명, 디자이너 1명으로 구성된 이 팀은 업무를 성실하게 진행하며 미루지 않고 효율적으로 프로젝트를 진행했습니다. [STACKPOT] 팟의 노력파와 실력파가 이루어낸 환상적인 조합! 그들의 열정과 실력이 돋보이는 멋진 결과를 보여주었습니다. 이들의 서비스 컨셉은 언제 어디서나 한 곳에서 프로젝트를 진행과 동시에 회고, 피드에 글을 올리며 업무와 공부를 긍정적으로 돕는 것입니다.진행하며 미루지 않고 효율적으로 프로젝트를 진행했습니다. '
	return (
		<div
			css={backgroundStyle}
			onClick={(e) => { if (e.target === e.currentTarget) onCancel(); }}
		>
			<div css={modalStyle} aria-modal aria-labelledby="pot-summary-title" onClick={(e) => e.stopPropagation()}>
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

				<div css={contentStyle}>
					<p>{tmp}</p>
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
		</div>
	);
};

export default PotSummaryModal;
