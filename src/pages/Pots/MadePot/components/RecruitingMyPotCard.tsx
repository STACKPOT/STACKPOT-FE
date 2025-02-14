import { DdayBadge, MemberGroup } from "@components/index";
import { cardStyle, potNameStyle } from "./RecruitingMyPotCard.style";
import { Role } from "types/role";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";

interface RecruitingMyPotCardProps {
    potId: number;
    potName: string;
    members: Role[];
    dday: string;
}

const RecruitingMyPotCard: React.FC<RecruitingMyPotCardProps> = ({ potId, potName, members, dday }: RecruitingMyPotCardProps) => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`${routes.potDetail}/${potId}`)
    }

    return (
        <div css={cardStyle} onClick={handleCardClick}>
            <DdayBadge days={dday} />
            <p css={potNameStyle}>{potName}</p>
            <MemberGroup memberRoleList={members} />
        </div>
    );
};
export default RecruitingMyPotCard;