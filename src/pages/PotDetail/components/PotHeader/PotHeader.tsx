import { LeftIcon } from "@assets/svgs";
import { backButtonIconStyle, backButtonStyle, container, titleContainer, titleStyle } from "./PotHeader.style";
import { PotButton } from "@components/index";

interface PotHeaderProps {
    title: string;
    isMyPot: boolean;
    isApplied: boolean;
    isFinished: boolean;
    onClickBack: () => void;
    onApply: () => void;
    onCancelApply: () => void;
    onEdit: () => void;
}
const PotHeader: React.FC<PotHeaderProps> = ({ title, isMyPot, isApplied, isFinished, onClickBack, onApply, onCancelApply, onEdit }: PotHeaderProps) => {
    return (
        <div css={container}>
            <div css={titleContainer}>
                <button css={backButtonStyle} onClick={onClickBack}>
                    <LeftIcon css={backButtonIconStyle} />
                </button>
                <h1 css={titleStyle}>{title}</h1>
            </div>
            <PotButton
                onClick={(isFinished && onEdit) ||
                    (isMyPot && onEdit) ||
                    (isApplied && onCancelApply) ||
                    onApply}>
                {(isFinished && "팟 소개 수정") ||
                    (isMyPot && "수정") ||
                    (isApplied && "지원 취소하기") ||
                    "이 팟에 지원하기"
                }</PotButton>
        </div>
    )
}
export default PotHeader;