import { PotButton } from "@components/index";
import { columnContainer, container, elementContainer, elementContentStyle, elementTitleStyle, potDetailContainer, titleContainer, titleStyle } from "./FinishedPotCard.style";

interface FinishedPotCardProps {
    id: number;
    title: string;
    startDate: string;
    period: string;
    method: string;
    stacks: string;
    languages: string;
    onEdit: (id: number) => void;
    onClickCard: (id: number) => void;
}

const FinishedPotCard: React.FC<FinishedPotCardProps> = ({ id, title, startDate, period, method, stacks, languages, onEdit, onClickCard }: FinishedPotCardProps) => {
    return (
        <div css={container} onClick={() => onClickCard(id)}>
            <div css={titleContainer}>
                <h1 css={titleStyle}>{title}</h1>
                <PotButton onClick={() => onEdit(id)}>팟 소개 수정</PotButton>
            </div>
            <div css={potDetailContainer}>
                <div css={columnContainer}>
                    <div css={elementContainer}>
                        <p css={elementTitleStyle}>시작 날짜</p>
                        <p css={elementContentStyle}>{startDate}</p>
                    </div>
                    <div css={elementContainer}>
                        <p css={elementTitleStyle}>사용 언어</p>
                        <p css={elementContentStyle}>{languages}</p>
                    </div>
                    <div css={elementContainer}>
                        <p css={elementTitleStyle}>모집 분야</p>
                        <p css={elementContentStyle}>{stacks}</p>
                    </div>
                </div>
                <div css={columnContainer}>
                    <div css={elementContainer}>
                        <p css={elementTitleStyle}>진행 방식</p>
                        <p css={elementContentStyle}>{method}</p>
                    </div>
                    <div css={elementContainer}>
                        <p css={elementTitleStyle}>예상 기간</p>
                        <p css={elementContentStyle}>{period}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FinishedPotCard;