import { PotButton, PotInformation } from "@components/index";
import { container, titleContainer, titleStyle } from "./FinishedPotCard.style";
import { useNavigate } from "react-router-dom";

interface FinishedPotCardProps {
    id: number;
    title: string;
    startDate: string;
    period: string;
    method: string;
    stacks: string;
    languages: string;
}

const FinishedPotCard: React.FC<FinishedPotCardProps> = ({ id, title, startDate, period, method, stacks, languages }: FinishedPotCardProps) => {
    const navigate = useNavigate();
    const handleClickPot = (id: number) => {
        navigate(`/pot/${id}`);
    }
    const handleEditPot = (id: number) => {
        // todo: 팟 수정 페이지로 이동
    }

    return (
        <div css={container} onClick={() => handleClickPot(id)}>
            <div css={titleContainer}>
                <h1 css={titleStyle}>{title}</h1>
                <PotButton onClick={() => handleEditPot(id)}>팟 소개 수정</PotButton>
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