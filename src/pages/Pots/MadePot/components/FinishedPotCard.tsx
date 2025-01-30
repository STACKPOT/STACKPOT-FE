import { PotButton, PotInformation } from "@components/index";
import { container, titleContainer, titleStyle } from "./FinishedPotCard.style";

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
            <PotInformation
                startDate={startDate}
                period={period}
                method={method}
                stacks={stacks}
                languages={languages} />
        </div>
    )
}
export default FinishedPotCard;