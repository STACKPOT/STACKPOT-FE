import EvaluationBadge from "@components/commons/Badge/EvaluationBadge/EvaluationBagde";
import { container, innerContainer, nicknameStyle, profileNicknameContainer, profileStyle } from "./PotMemberCard.style";

interface PotMemberCardProps {
    profileImage: string,
    nickname: string,
    evaluation:string,
    evaluationEmoji:string,
}

const PotMemberCard: React.FC<PotMemberCardProps> = ({ profileImage, nickname, evaluation, evaluationEmoji }: PotMemberCardProps) => {
    return (
        <div css={container}>
            <div css={innerContainer}>
                <div css={profileNicknameContainer}>
                    <img css={profileStyle} src={profileImage} />
                    <p css={nicknameStyle}>{nickname}</p>
                </div>
                <EvaluationBadge content={evaluation} emoji={evaluationEmoji} />
            </div>
        </div>
    )
}
export default PotMemberCard;