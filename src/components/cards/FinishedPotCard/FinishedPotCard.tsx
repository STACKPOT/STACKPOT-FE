import { MemberGroup, PotButton, PotInformation } from "@components/index";
import { container, profileContainer, titleContainer, titleProfileContainer, titleStyle } from "./FinishedPotCard.style";
import { useNavigate } from "react-router-dom";

interface FinishedPotCardProps {
    id: number;
    title: string;
    startDate: string;
    period: string;
    method: string;
    stacks: string;
    languages: string;
    memberProfiles: string[];
    editButton: boolean;
    isMyPot: boolean;
}

const FinishedPotCard: React.FC<FinishedPotCardProps> = ({ id, title, startDate, period, method, stacks, languages, memberProfiles, editButton, isMyPot }: FinishedPotCardProps) => {
    const navigate = useNavigate();
    const handleClickPot = (id: number) => {
        navigate(`/pot/${id}`);
    }
    const handleEditPot = (id: number) => {
        if (isMyPot) {
            navigate(`/edit-finished-pot/${id}`);
        } else {
            // todo: 어필하기 모달 띄우기
        }
    }

    return (
        <div css={container} onClick={() => handleClickPot(id)}>
            <div css={titleProfileContainer}>
                <div css={titleContainer}>
                    <h1 css={titleStyle}>{title}</h1>
                    {editButton && <PotButton onClick={() => handleEditPot(id)}>{isMyPot ? "팟 소개 수정" : "어필하기 수정"}</PotButton>}
                </div>
                <div css={profileContainer}>
                    <MemberGroup profileImageList={memberProfiles} />
                </div>
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